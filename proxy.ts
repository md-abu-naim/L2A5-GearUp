import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/jwt'
import { getNewAccessToken } from './services/getToken'
import { JwtPayload } from 'jsonwebtoken'

const AUTH_ROUTES = ['/login', '/register']
const PUBLIC_ROUTES = ['/', '/gears', '/categories', '/register', '/login']

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const cookieStore = await cookies()

    let accessToken = request.cookies.get("accessToken")?.value
    const refreshToken = request.cookies.get("refreshToken")?.value

    let decodedAccessToken = accessToken ? await verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string) : null
    const decodedRefreshToken = refreshToken ? await verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET as string) : null

    let userRole = null

    if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
        const result = await getNewAccessToken()

        if (result.success) {
            const newAccessToken = result.data.accessToken

            cookieStore.set("accessToken", newAccessToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 24,
                sameSite: 'lax'
            })

            accessToken = newAccessToken
            decodedAccessToken = await verifyToken(accessToken!, process.env.JWT_ACCESS_SECRET as string)
        }
    }


    if (!decodedAccessToken?.success) {
        cookieStore.delete('accessToken')
    }

    if (decodedAccessToken?.success && decodedAccessToken.data) {
        userRole = (decodedAccessToken.data as JwtPayload).role
    }

    if (accessToken && AUTH_ROUTES.includes(pathname)) {
        if (userRole === 'CUSTOMER') {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
        else if (userRole === 'PROVIDER') {
            return NextResponse.redirect(new URL('/provider-dashboard', request.url))
        }
        else if (userRole === 'ADMIN') {
            return NextResponse.redirect(new URL('/admin-dashboard', request.url))
        } else {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    const isPublic = PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(route + '/'))

    if (!accessToken && !isPublic) {
        const loginUrl = new URL('/login', request.url)

        loginUrl.searchParams.set("redirectTo", pathname)

        return NextResponse.redirect(loginUrl)
    }

    if (pathname.startsWith('/dashboard') && userRole !== 'CUSTOMER') {
        return NextResponse.redirect(new URL('/un-available', request.url))
    }
    if (pathname.startsWith('/admin-dashboard') && userRole !== 'ADMIN') {
        return NextResponse.redirect(new URL('/un-available', request.url))
    }
    if (pathname.startsWith('/provider-dashboard') && userRole !== 'PROVIDER') {
        return NextResponse.redirect(new URL('/un-available', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Exclude API routes, static files, image optimizations, and .png files
        '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    ],
}
// import { cookies } from 'next/headers'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// const AUTH_ROUTES = ['/login', '/register']
// const PUBLIC_ROUTES = ['/', '/gear', '/categories', '/register']

// // This function can be marked `async` if using `await` inside
// export async function proxy(request: NextRequest) {
//     const pathname = request.nextUrl.pathname
//     const cookieStore = await cookies()

//     let accessToken = request.cookies.get("accessToken")?.value
//     const refreshToken = request.cookies.get("refreshToken")?.value
//     return NextResponse.redirect(new URL('/home', request.url))
// }

// export const config = {
//     matcher: [
//         // Exclude API routes, static files, image optimizations, and .png files
//         '/((?!api|_next/static|_next/image|.*\\.png$).*)',
//     ],
// }
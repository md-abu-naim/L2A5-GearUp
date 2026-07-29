"use server"
import { cookies } from "next/headers";
import { LoginFormTypes } from "./FormValidation";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { redirect } from "next/navigation";
export const loginUser = async (data: LoginFormTypes) => {
    const payload = {
        email: data.email,
        password: data.password
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log(result);

    if (!res.ok) {
        throw new Error(result.message || "Invalid email or password.");
    }

    if (result.success) {
        const cookieStore = await cookies()

        cookieStore.set("accessToken", result.data.accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: 'lax'
        })

        cookieStore.set("refreshToken", result.data.refreshToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'lax'
        })

        const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload

        // if(redirectTo && typeof redirectTo === 'string' && redirectTo.startsWith('/') && !redirectTo.startsWith('//')){
        //     redirect(redirectTo)
        // }

        if (decodedToken.role === 'CUSTOMER') {
            redirect('')
        } else if (decodedToken.role === 'PROVIDER') {
            redirect('/')
        } else if (decodedToken.role === 'ADMIN') {
            redirect('/admin-dashboard')
        }
    }

    return result
}
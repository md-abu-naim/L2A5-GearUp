"use server"
import { isAccessTokenExists } from "@/services/getToken"
import { revalidateTag } from "next/cache"

export const updateUserStatus = async (id: string, status: string) => {
    const payload = { status }
    const accessToken = await isAccessTokenExists()

    const res = await fetch(`${process.env.BACKEND_URL}/admin/users/${id}`, {
        method: "PATCH",
        headers: {
            Cookie: `accessToken=${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })

    const result = await res.json()

    if (result.success) {
        revalidateTag("admin-users", {
            expire: 0
        })
    }

    return result
}
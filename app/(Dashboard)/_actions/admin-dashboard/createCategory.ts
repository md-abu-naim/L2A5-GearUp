"use server"
import { GearPayload } from "@/lib/types"
import { isAccessTokenExists } from "@/services/getToken"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const createCategory = async (payload: GearPayload) => {
    const accessToken = await isAccessTokenExists()

    const res = await fetch(`${process.env.BACKEND_URL}/admin/categories`, {
        method: "POST",
        headers: {
            Cookie: `accessToken=${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })

    const result = await res.json()

    if (result.success) {
        revalidateTag("categories", {
            expire: 0
        })
        redirect('/admin-dashboard/categories')
    }

    return result
}
"use server"
import { isAccessTokenExists } from "@/services/getToken"
import { revalidateTag } from "next/cache"

type Payload = {
    name: string,
    description: string
}
export const updateCategory = async (id: string, payload: Payload) => {
    const accessToken = await isAccessTokenExists()

    const res = await fetch(`${process.env.BACKEND_URL}/admin/categories/${id}`, {
        method: "PATCH",
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
    }

    return result
}
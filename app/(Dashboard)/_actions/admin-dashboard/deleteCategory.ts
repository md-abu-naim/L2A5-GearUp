"use server"

import { isAccessTokenExists } from "@/services/getToken"
import { revalidateTag } from "next/cache"

export const deleteCategory = async (id: string) => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/admin/categories/${id}`, {
            method: "DELETE",
            headers: {
                Cookie: `accessToken=${accessToken}`
            }
        })
        const result = await res.json()

        if (result.success) {
            revalidateTag("categories", {
                expire: 0
            })
        }

        return result || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
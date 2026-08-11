"use server"

import { isAccessTokenExists } from "@/services/getToken"
import { revalidateTag } from "next/cache"

export const deleteGear = async (id: string) => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/provider/gear/${id}`, {
            method: "DELETE",
            headers: {
                Cookie: `accessToken=${accessToken}`
            }
        })
        const result = await res.json()

        if (result.success) {
            revalidateTag("provider-gears", {
                expire: 0
            })
        }

        return result
    } catch (error) {
        console.error("Error deleting gears:", error);
        throw error
    }
}
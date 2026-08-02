"use server"

import { isAccessTokenExists } from "@/services/getToken"
import { revalidatePath } from "next/cache"

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
            revalidatePath("/provider/dashboard"); // অথবা যেই page-এ gear list আছে
        }

        return result || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
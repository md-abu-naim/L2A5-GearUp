"use server"
import { isAccessTokenExists } from "@/services/getToken"
import { revalidatePath } from "next/cache"

export const updateRentalStatus = async (id: string, status: string) => {
    const payload = { status }
    const accessToken = await isAccessTokenExists()

    const res = await fetch(`${process.env.BACKEND_URL}/provider/rentals/${id}`, {
        method: "PATCH",
        headers: {
            Cookie: `accessToken=${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })

    const result = await res.json()

    if (result.success) {
        revalidatePath("/provider/dashboard");
    }

    return result
}
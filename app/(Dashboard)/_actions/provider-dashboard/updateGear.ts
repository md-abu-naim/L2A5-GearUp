"use server"
import { GearPayload } from "@/lib/types"
import { isAccessTokenExists } from "@/services/getToken"
import { revalidateTag } from "next/cache"

export const updateGear = async (id: string, payload: GearPayload) => {
    const accessToken = await isAccessTokenExists()

    const res = await fetch(`${process.env.BACKEND_URL}/provider/gear/${id}`, {
        method: "PATCH",
        headers: {
            Cookie: `accessToken=${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })

    const result = await res.json()

    if (result.success) {
        revalidateTag("provider-gears", {
            expire: 0
        })
    }

    return result
}
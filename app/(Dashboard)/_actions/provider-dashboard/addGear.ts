"use server"
import { GearPayload } from "@/lib/types"
import { isAccessTokenExists } from "@/services/getToken"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const addGear = async (payload: GearPayload) => {
    const accessToken = await isAccessTokenExists()

    const res = await fetch(`${process.env.BACKEND_URL}/provider/gear`, {
        method: "POST",
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
        redirect('/provider-dashboard/my-gears')
    }

    return result
}
"use server"

import { isAccessTokenExists } from "@/services/getToken"
import { redirect } from "next/navigation"

type payloadTypes = {
    gearItemId: string,
    startDate: string,
    endDate: string
    quantity: number,
    totalPrice: number,
}

export const createRental = async (payload: payloadTypes) => {
    const accessToken = await isAccessTokenExists()

    const res = await fetch(`${process.env.BACKEND_URL}/rentals`, {
        method: "POST",
        headers: {
            Cookie: `accessToken=${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })

    const result = await res.json()

    if (result.success) {
        redirect(`/dashoboard/my-rentals/${result.data.rental.id}`)
    }

    return result
}
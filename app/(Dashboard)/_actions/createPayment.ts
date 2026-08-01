"use server"
import { isAccessTokenExists } from "@/services/getToken"
import { redirect } from "next/navigation"

export const createPayment = async (id: string) => {
    const payload = {rentalId: id}
    const accessToken = await isAccessTokenExists()

    const res = await fetch(`${process.env.BACKEND_URL}/payment/create`, {
        method: "POST",
        headers: {
            Cookie: `accessToken=${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })

    const result = await res.json()

    if(result.success){
        redirect(result.data.payment.checkoutUrl)
    }

    return result
}
"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getPaymentById = async (id: string) => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/payment/${id}`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            next: {
                revalidate: 0
            }
        })
        const payment = await res.json()

        return payment?.data?.payment || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
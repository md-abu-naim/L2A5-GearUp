"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getMyPayments = async () => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/payment`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            next: {
                revalidate: 0
            }
        })
        
        const payments = await res.json()

        return payments?.data?.payments
    } catch (error) {
        console.error("Error fetching payments:", error);
        throw error
    }
}
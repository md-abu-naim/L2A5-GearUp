"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getMyRentals = async () => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/rentals`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            next: {
                revalidate: 0
            }
        })
        const rentals = await res.json()

        return rentals?.data?.rentals.slice(0, 6) || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
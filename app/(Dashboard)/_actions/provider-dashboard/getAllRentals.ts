"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getAllRentals = async () => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/provider/rentals`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            next: {
                revalidate: 0
            }
        })
        const rentals = await res.json()

        return rentals?.data?.rentals|| [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
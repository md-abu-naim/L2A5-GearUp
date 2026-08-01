"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getRentalById = async (id: string) => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/rentals/${id}`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            next: {
                revalidate: 0
            }
        })
        const rentals = await res.json()

        return rentals?.data?.rental || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
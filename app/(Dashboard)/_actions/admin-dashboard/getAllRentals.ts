"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getAllRentals = async () => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/admin/rentals`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            cache: 'force-cache',
            next: {
                revalidate: 60 * 60 * 24,
                tags: ["provider-rentals"]
            }
        })
        const rentals = await res.json()

        return rentals?.data?.rentals
    } catch (error) {
        console.error("Error fetching rentals:", error);
        throw error
    }
}
"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getAllGears = async () => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/admin/gear`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            cache: 'force-cache',
            next: {
                revalidate: 60 * 60 * 24,
                tags: ["provider-gears"]
            }
        })
        const gears = await res.json()

        return gears?.data || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
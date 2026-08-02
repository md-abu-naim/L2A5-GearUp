"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getMyGears = async () => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/provider/gear`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            next: {
                revalidate: 0
            }
        })
        const gears = await res.json()

        return gears?.data|| [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
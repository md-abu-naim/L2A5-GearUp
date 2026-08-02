"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getAllUsers = async () => {
    try {
        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/admin/users`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            cache: 'force-cache',
            next: {
                revalidate: 60 * 60 * 24,
                tags: ["admin-users"]
            }
        })
        const users = await res.json()

        return users?.data?.users|| [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
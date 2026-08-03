"use server"

import { isAccessTokenExists } from "@/services/getToken"

export const getAllUsers = async ({
    search = "",
    page = 1,
    limit = 8,
}: {
    search?: string;
    page?: number;
    limit?: number;
} = {}) => {
    try {
        const params = new URLSearchParams()

        params.append("search", search ?? "")
        params.append("page", String(page ?? 1))
        params.append("limit", String(limit ?? 8))

        const accessToken = await isAccessTokenExists()

        const res = await fetch(`${process.env.BACKEND_URL}/admin/users?${params}`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            cache: 'force-cache',
            next: {
                revalidate: 60 * 60 * 24,
                tags: ["admin-users"]
            }
        })
        const result = await res.json();

        return result || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
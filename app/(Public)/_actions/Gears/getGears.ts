"use server"

import { GearQuery } from "@/lib/types";

export async function getGears(params?: GearQuery) {

    const query = new URLSearchParams()

    if (params?.search) query.set("search", params.search)
    if (params?.category) query.set("category", params.category)
    if (params?.brand) query.set("brand", params.brand)
    if (params?.availability) query.set("availability", params.availability)
    if (params?.minPrice) query.set("minPrice", params.minPrice)
    if (params?.maxPrice) query.set("maxPrice", params.maxPrice)

    try {
        const res = await fetch(`${process.env.BACKEND_URL}/gear?${query.toString()}`, {
            next: {
                revalidate: 0
            }
        })
        const gears = await res.json()

        return gears?.data?.gears
    } catch (error) {
        console.error("Error fetching gears:", error);
        throw error
    }
}
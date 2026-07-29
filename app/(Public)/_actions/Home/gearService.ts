"use server"

export async function getFeaturedGears() {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/gear`)
        const gears = await res.json()

        return gears?.data?.gears.slice(0, 6) || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
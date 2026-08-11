"use server"

export async function getFeaturedGears() {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/gear/featured`)
        const gears = await res.json()

        return gears?.data
    } catch (error) {
        console.error("Error fetching gears:", error);
        throw error
    }
}
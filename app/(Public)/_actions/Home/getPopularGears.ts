"use server"

export async function getPopularGears() {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/gear/popular`)
        const gears = await res.json()

        return gears?.data
    } catch (error) {
        console.error("Error fetching gears:", error);
        throw error
    }
}
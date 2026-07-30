"use server"

export async function getGears() {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/gear`)
        const gears = await res.json()

        return gears?.data?.gears || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
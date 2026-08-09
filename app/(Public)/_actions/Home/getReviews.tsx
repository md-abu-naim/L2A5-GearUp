"use server"

export async function getReviews() {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/review`)
        const reviews = await res.json()

        return reviews?.data || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
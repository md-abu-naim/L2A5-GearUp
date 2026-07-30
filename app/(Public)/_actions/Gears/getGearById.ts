"use server"

export async function getGearById(id: string) {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/gear/${id}`, {
            next: {
                revalidate: 0
            }
        })
        const gear = await res.json()

        return gear?.data?.gear || {};
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
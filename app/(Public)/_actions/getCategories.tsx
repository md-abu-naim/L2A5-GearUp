"use server"

export async function getCategories() {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/categories`, {
            cache: 'force-cache',
            next: {
                revalidate: 60 * 60 * 24,
                tags: ["categories"]
            }
        })
        const categories = await res.json()

        return categories?.data?.categories.slice(0, 6) || [];
    } catch (error) {
        console.error("Error fetching gears:", error);
        return [];
    }
}
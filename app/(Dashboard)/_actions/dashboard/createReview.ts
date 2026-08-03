"use server"
import { isAccessTokenExists } from "@/services/getToken"

type Payload = {
    gearItemId: string,
    rating: number,
    comment: string,
};

export const createReview = async (payload: Payload) => {
    const accessToken = await isAccessTokenExists()

    const res = await fetch(`${process.env.BACKEND_URL}/review`, {
        method: "POST",
        headers: {
            Cookie: `accessToken=${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })

    const result = await res.json()

    return result
}
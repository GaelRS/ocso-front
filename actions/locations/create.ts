'use server'

import { API_URL, TOKEN_NAME } from "@/constants"
import axios from "axios"
import { cookies } from "next/headers"

export async function createLocation(formData: FormData) {
    const token = cookies().get(TOKEN_NAME)?.value;

    let location: any = {};
    let locationLatLng = [0, 0];

    for (const key of Array.from(formData.keys())) {
        const value = formData.get(key);
        if (value) {
            if (key === 'locationLat') {
                locationLatLng[0] = +value;
            } else if (key === 'locationLng') {
                locationLatLng[1] = +value;
            } else {
                location[key] = value;
            }
        }
    }

    location.locationLatLng = locationLatLng;

    try {
        const res = await axios.post(`${API_URL}/locations`, {
            ...location
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

    } catch (error: any) {
        console.error("Error creating location:", error);
        if (axios.isAxiosError(error)) {
            console.error("Axios error details:", error.response?.data);
        }
    }
}
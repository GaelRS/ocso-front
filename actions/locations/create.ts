'use server'

import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/AuthHeaders";
import { revalidateTag } from "next/cache";

export async function createLocation(formData: FormData) {
    

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
        const response = await fetch(`${API_URL}/locations`, {
            body: JSON.stringify(location),
            method: 'POST',
            headers:{
                ...authHeaders()         
            }
        });
        if(response.status === 201) revalidateTag("dasboard:locations");
    } catch (error: any) {
        console.error("Error creating location:", error);
    }
}
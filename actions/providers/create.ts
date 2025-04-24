"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/AuthHeaders";
import { revalidateTag } from "next/cache";

export default async function createProvider(formData: FormData) {

  const providerData = {
    providerName: formData.get("providerName") as string | null,
    providerEmail: formData.get("providerEmail") as string | null,
    providerPhoneNumber: formData.get("providerPhoneNumber") as string | null,
  };

  const response = await fetch(`${API_URL}/providers`, {
    method: 'POST',
    headers: {
      ...authHeaders(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(providerData),
  });


  if (response.status === 201){
    revalidateTag("dashboard:providers")
  } 
}
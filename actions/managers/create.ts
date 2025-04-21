"use server"

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/AuthHeaders";
import { revalidateTag } from "next/cache";

export default async function createManager(formData: FormData){
   let manager: any = {};
   for (const key of Array.from(formData.keys())) {
      const value = formData.get(key);
      manager[key] = value;
  }
  const response = await fetch(`${API_URL}/managers`, {
      method: 'POST',
      body: JSON.stringify(manager),
      headers:{
         ...authHeaders(),
      }
  })
  if(response.status === 201) revalidateTag("dashboard:managers")
}
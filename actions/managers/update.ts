"use server"

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/AuthHeaders";
import { revalidateTag } from "next/cache";

export default async function createManager(managerId: string, formData: FormData){
   let manager: any = {};
   for (const key of Array.from(formData.keys())) {
      const value = formData.get(key);
      manager[key] = value;
  }
  const response = await fetch(`${API_URL}/managers/${managerId}`, {
      method: 'PATCH',
      body: JSON.stringify(manager),
      headers:{
         ...authHeaders(),
      }
  })
  if(response.status === 200){
      revalidateTag("dashboard:managers")
      revalidateTag(`dashboard:managers:${managerId}`)
  }
}
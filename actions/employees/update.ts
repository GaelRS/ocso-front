"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/AuthHeaders";
import { revalidateTag } from "next/cache";

export default async function updateEmployee(id: string, formData: FormData) {
  const cleanData = new FormData()
  Array.from(formData.entries()).forEach(([key, value]) => {
    if(!key.startsWith("$")){
      cleanData.append(key, value);
    }
  });

  const response = await fetch(`${API_URL}/employees/${id}`, {
    method: "PATCH",
    body: cleanData,
    headers: {
      ...authHeaders(),
     
    },
  });


   if (response.status === 200) {
      revalidateTag("dashboard:employees");

   }
   if (response.status === 200) {
      revalidateTag(`dashboard:employees:${id}`);

   }
  return;

}
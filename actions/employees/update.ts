"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/AuthHeaders";
import { revalidateTag } from "next/cache";

export default async function updateEmployee(id: string, formData: FormData) {
   formData.delete("$ACTION_REF_0");
   formData.delete("$ACTION_0:1");
   formData.delete("$ACTION_0:0");
  const response = await fetch(`${API_URL}/employees/${id}`, {
    method: "PATCH",
    body: formData,
    headers: {
      ...authHeaders(),
     
    },
  });

   if (response.status === 200) {
      revalidateTag("dashboard:employees");

   }
  return;

}
"use server"

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/AuthHeaders";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData){
   let product: any = {};
   for (const key of Array.from(formData.keys())) {
      if(!key.includes('$ACTION_ID')) {
         const value = formData.get(key);
         product[key] = value;
      }
  }
  product.price = +product.price
  product.countSeal = +product.countSeal
  const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers:{
         ...authHeaders(),
         'content-type': 'application/json'
      }
  })
  if(response.status === 201) revalidateTag("dashboard:products")
}
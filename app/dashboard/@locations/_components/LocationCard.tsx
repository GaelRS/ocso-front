import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/AuthHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import axios from "axios";
import Link from "next/link";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
   if(!store) return null;
   const {data} = await axios.get<Location>(`${API_URL}/locations/${store}`,{
      headers: {
         ...authHeaders()
      }
   })
   return(
      <Card>
         <CardHeader>
            <p className="w-full">Tienda: <b>{data.locationName}</b></p>
         </CardHeader>
         <Divider />
         <CardBody>
            <p className="w-full">Manager: <Link href={{pathname: `/dashboard/managers`}}><b>{data.managerId?.managerFullName}</b></Link></p>
         </CardBody>
      </Card>
   )
}
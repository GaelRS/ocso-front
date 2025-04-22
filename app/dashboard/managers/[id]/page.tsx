import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/AuthHeaders";
import ManagerCard from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";

export default async function ManagerPage({
  params,
}: {
  params: { id: string };
}) {

   const response = await fetch(`${API_URL}/managers/${params.id}`, {
      headers:{
         ...authHeaders(),
      },
      next:{
         tags:[`dashboard:managers:${params.id}`, `dashboard:managers`]
      }
   })
   const data:Manager = await response.json();
   return (
      <div className="flex flex-col gap-10 flex-grow-0 justify-center ">
         <ManagerCard manager={data}/>
         <div className="bg-gray-50 rounded-md px-20 py-2">
            <DeleteManagerButton managerId = {data.managerId}/>
         </div>
      </div>
   )

}
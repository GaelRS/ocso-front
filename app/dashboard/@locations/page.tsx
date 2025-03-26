
import axios from "axios";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import { API_URL, TOKEN_NAME } from "@/constants";
import FormNewLocation from "./_components/FormNewLocation";
import { cookies } from "next/headers";

const LocationsPage = async ({searchParams}:{searchParams: { [key: string]: string | string[] | undefined }}) => {
   const token = cookies().get(TOKEN_NAME)?.value;
   let {data} = await axios.get<Location[]>(`${API_URL}/locations`,{
      headers: {
         "Authorization": `Bearer ${token}`
      }
   });

   data = [
      {
         locationId: 0,
         locationName: "Ninguna",
         locationLatLng: [0, 0],
         locationAddress: "Ninguna",
         employees: []
      },
      ...data
   ]
   
   return (
      <div  className="w-8/12">
         <div className="w-full flex flex-col items-center h-[90vh]"> 
            <div className="w-1/2 my-10">
               <SelectLocation locations={data} store={searchParams?.store} />
            </div>
            <div className="w-8/12">
               <LocationCard store={searchParams.store}/>
            </div>
            <FormNewLocation />
         </div>
      </div>
   )
}
;
export default LocationsPage;
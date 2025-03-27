
import axios from "axios";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import { API_URL, TOKEN_NAME } from "@/constants";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/AuthHeaders";

const LocationsPage = async ({searchParams}:{searchParams: { [key: string]: string | string[] | undefined }}) => {
   
   let {data} = await axios.get<Location[]>(`${API_URL}/locations`,{
      headers: {
         ...authHeaders()
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
            <div className="w-7/12 mx-0">
               <FormNewLocation store={searchParams.store}/>
            </div>
               <DeleteLocationButton store={searchParams.store}/>
         </div>
      </div>
   )
}
;
export default LocationsPage;

import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import { API_URL} from "@/constants";
import FormNewLocation from "./_components/FormNewLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/AuthHeaders";
import UpdateLocation from "./_components/UpdateLocation";

const LocationsPage = async ({searchParams}:{searchParams: { [key: string]: string | string[] | undefined }}) => {
   
   const response = await fetch(`${API_URL}/locations`,{
      headers: {
         ...authHeaders()
      },
      next:{
         tags:["dashboard:locations"]
      }
   });

   let data: Location[] = await response.json();
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

   const storeValue = searchParams?.store;
   
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
            <div className="flex flex-row flex-grow-0 gap-10 items-center">
               <DeleteLocationButton store={searchParams.store}/>
               <UpdateLocation store={searchParams.store}>
                  <FormUpdateLocation store={searchParams.store}/>
               </UpdateLocation>
            </div>
         </div>
      </div>
   )
}
;
export default LocationsPage;
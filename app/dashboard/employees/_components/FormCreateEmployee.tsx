
import { Button, Input } from "@heroui/react";
import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/AuthHeaders";
import SelectLocations from "../[id]/_components/SelectLocation";

export default async function FormCreateEmployee() {
   const responseLocations = await fetch(`${API_URL}/locations`,{
      headers:{
         ...authHeaders(),
      }
   })
   const locations = await responseLocations.json();
   return (
      <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
         <Input required={true} isRequired label="Nombre" placeholder="Marco" name="employeeName"/>
         <Input required={true} isRequired label="Apellido" placeholder="Aurelio" name="employeeLastName"/>
         <Input required={true} isRequired label="Correo electronico" placeholder="marco@marco.com" name="employeeEmail"/>
         <Input required={true} isRequired label="Número de telefono" placeholder="442XXXXXXX" name="employeePhoneNumber"/>
         <Input type="file"label="Foto" name="employeePhoto"/>
         <SelectLocations stores={locations} />
         <Button type="submit" color="primary" className="w-full">Crear Empleado</Button>
      </form>
   )

}
import updateEmployee from "@/actions/employees/update";
import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/AuthHeaders";
import { Button, Input } from "@heroui/react";
import SelectLocations from "./SelectLocation";

export default async function FormUpdateEmployee({employee}:{employee: Employee}) {
   const {id} = employee;
   const updateEmployeeById = updateEmployee.bind(null, id);

   const responseLocations = await fetch(`${API_URL}/locations`,{
         headers:{
            ...authHeaders(),
         }
      })
      const locations = await responseLocations.json();

   return (
      <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
         <Input required={true} isRequired label="Nombre" defaultValue={employee.employeeName} name="employeeName"/>
         <Input required={true} isRequired label="Apellido" defaultValue={employee.employeeLastName} name="employeeLastName"/>
         <Input required={true} isRequired label="Correo electronico" defaultValue={employee.employeeEmail} name="employeeEmail"/>
         <Input required={true} isRequired label="Número de telefono" defaultValue={employee.employeePhoneNumber} name="employeePhoneNumber"/>
         <Input type="file"label="Foto" defaultValue={employee.employeePhoto} name="employeePhoto"/>
         <SelectLocations stores={locations} defaultStore={employee.location?.locationId} />
         <Button type="submit" color="primary" className="w-full"> Actualizar datos</Button>
      </form>
   )

}
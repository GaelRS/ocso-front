import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Input } from "@heroui/react";

export default function FormUpdateEmployee({employee}:{employee: Employee}) {
   const {id} = employee;
   const updateEmployeeById = updateEmployee.bind(null, id);

   return (
      <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
         <Input required={true} isRequired label="Nombre" defaultValue={employee.employeeName} name="employeeName"/>
         <Input required={true} isRequired label="Apellido" defaultValue={employee.employeeLastName} name="employeeLastName"/>
         <Input required={true} isRequired label="Correo electronico" defaultValue={employee.employeeEmail} name="employeeEmail"/>
         <Input required={true} isRequired label="Número de telefono" defaultValue={employee.employeePhoneNumber} name="employeePhoneNumber"/>
         <Input type="file"label="Foto" defaultValue={employee.employeePhoto} name="employeePhoto"/>
         <Button type="submit" color="primary" className="w-full"> Actualizar datos</Button>
      </form>
   )

}
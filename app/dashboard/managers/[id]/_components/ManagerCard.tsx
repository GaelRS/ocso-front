import { Manager } from "@/entities";
import { Card, CardHeader, Divider, CardBody } from "@heroui/react";
import Link from "next/link";

export default function ManagerCard({manager}: {manager: Manager}) {
   return (
      <Card className="mx-20 py-2 text-center">
         <CardHeader>
            <p className="w-full"><b className="text-3xl">{manager.managerFullName}</b></p>
         </CardHeader>
         <Divider />
         <CardBody >
            <p className="w-full text-center">Email: <b>{manager.managerEmail}</b></p>
            <p className="w-full text-center">Teléfono: <b>{manager.managerPhoneNumber}</b></p>
            <p className="w-full text-center">Salario: <b>{manager.managerSalary}</b></p>
            {manager.location ? (
               <>
                  <p className="w-full text-center">Tienda: <Link href={{pathname:`/dashboard`,
                     query: {store: manager?.location?.locationId}
                  }} ><b className="underline ">{manager.location.locationName}</b></Link></p>
                  <p className="w-full text-center">Dirección de tienda: <b>{manager.location.locationAddress}</b></p>
               </>
            ) : (<p className="text-center">No tiene tienda</p>) }
         </CardBody>
      </Card>
   )
}
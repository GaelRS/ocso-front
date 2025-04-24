import { Provider } from "@/entities";
import { Card, CardHeader, Divider, CardBody } from "@heroui/react";

export default function ProviderCard({provider}:{provider: Provider}){
   return(
      <Card >
         <CardHeader>{provider.providerName}</CardHeader>
         <Divider/>
         <CardBody>
            <p>Correo electrónico: </p>
            <b>{provider.providerEmail}</b>
            <p>Número de telefono: </p>
            <b>{provider.providerPhoneNumber}</b>
            {
               provider.products && provider.products.length > 0 ? (
                  <p>Tiene <b>{provider.products.length}</b> productos</p>
               ) : <p>No tiene productos</p>
            }
         </CardBody>
      </Card>
   )
}
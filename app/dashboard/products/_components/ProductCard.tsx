import { Product } from "@/entities";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
   return(
      <Card className="w-[350px] mb-10 ">
         <CardHeader >{product.productName}</CardHeader>
         <Divider />
         <CardBody>
             <p>Nombre del producto: <b>{product.productName}</b></p>
             <p>Precio del producto: <b>{product.price}</b></p>
             <p>Proveedor: <Link className="font-bold underline" href={`/dashboard/providers/${product.provider.providerId}`}>{product.provider.providerName}</Link></p>
         </CardBody>

      </Card>
   )
}
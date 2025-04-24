import { Product } from "@/entities";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";

export default function ProductCard({ product }: { product: Product }) {
   return(
      <Card className="w-[350px] hover:scale-110">
         <CardHeader >{product.productName}</CardHeader>
         <Divider />
         <CardBody>
             <p>Nombre del producto: <b>{product.productName}</b></p>
             <p>Precio del producto: <b>{product.price}</b></p>
         </CardBody>

      </Card>
   )
}
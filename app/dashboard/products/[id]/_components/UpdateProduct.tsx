import { Product, Provider } from "@/entities";
import updateProduct from "@/actions/products/update";
import { Button, Input } from "@heroui/react";
import SelectProvider from "../../_components/SelectProvider";
import DeleteProduct from "./DeleteProduct";
import { LuCheck } from "react-icons/lu";

export default function UpdateProduct({product, providers}:{product: Product, providers: Provider[]}){
   const {productId} = product; 
   const updateProductById = updateProduct.bind(null, productId);
   return (
      <form action={updateProductById} className="pt-10 px-10 flex flex-col gap-4">
         <Input required={true} isRequired label="Nombre" defaultValue={product.productName} name="productName"/>
         <Input required={true} isRequired label="Num. de Sellos" defaultValue={String(product.countSeal)} name="countSeal"/>
         <Input required={true} isRequired label="Precio" defaultValue={String(product.price)}  name="price"/>
         <SelectProvider providers={providers} defaultProvider={product.provider?.providerId}/>
         <div className="flex flex-row gap-10 flex-grow-0">
            <Button color="primary" type="submit"><LuCheck size="20"/></Button>
         </div>

      </form>
   )

}
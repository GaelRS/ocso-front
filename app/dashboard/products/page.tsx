import createProduct from "@/actions/products/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/AuthHeaders";
import { Button, Input } from "@heroui/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";


const ProductsPage = async () => {
    const responseProviders = await fetch(`${API_URL}/providers`,{
        headers:{
            ...authHeaders(),
            'content-Type': 'application/json',
        }
    })
    const providers = await responseProviders.json()
    return (
        <form className="px-10 justify-center pt-8" action={createProduct}>
            <div className="flex flex-col  bg-orange-600 p-10 rounded-md gap-6">
                <h1 className="text-2xl text-white font-bold">Crear Producto</h1>
                <Input label="Nombre" name="productName"/>
                <Input label="Precio" endContent={<LuDollarSign size="20"/>} name="price"/>
                <Input label="Num. de Sellos" name="countSeal"/>
                <SelectProvider providers={providers} />
                <Button color="primary" type="submit">Crear Producto</Button>
            </div>
        
        </form>
    )
};

export default ProductsPage;


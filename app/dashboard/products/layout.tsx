import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/AuthHeaders";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";
import FilteredCards from "./_components/FilteredCards";
import { ReactNode } from "react";

const LayoutProducts = async ({children}:{children:ReactNode}) => {
    const responseProducts = await fetch(`${API_URL}/products`, {
        headers:{
            ...authHeaders(),
            'Content-Type': 'application/json',
        }, next:{
            tags: ['dashboard:products']
        }
    });
    const products: Product[] = await responseProducts.json()

    const responseProviders = await fetch(`${API_URL}/providers`,{
        headers:{
            ...authHeaders()
        },
        next:{
            tags: ['dashboard:providers']
        }
    })
    const providers = await responseProviders.json()

    return (
        <div className="h-[90vh] w-full flex flex-row">
            <div className="w-4/12">
                <FilteredCards products={products} providers={providers}/>
            </div>
            <div className="w-9/12">
               {children}
            </div>
        </div>
    )
}

export default LayoutProducts;
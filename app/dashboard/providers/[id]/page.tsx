import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/AuthHeaders"
import ProviderCard from "../_components/ProviderCard"
import { Product, Provider } from "@/entities"
import ProductCard from "../_components/ProductCard"
import Link from "next/link"

export default async function ProvidersPage({params}: {params: {id: string}}) {
   const provider: Provider = await (await fetch(`${API_URL}/providers/${params.id}`, {
      headers: {
         ...authHeaders(),
      }
   })).json()
   return (
      <div className="flex flex-grow-0 flex-col gap-10 h-[90vh] pt-10 px-10">
         <ProviderCard provider={provider} />
         <div className="h-1 bg-orange-900 w-full ">
            <div className="flex flex-wrap gap-10 pt-10">
               {
                  provider.products.map((product: Product) => (
                     <Link href={{pathname: `/dashboard/products/${product.productId}`}} className="hover:scale-110 transition-transform" key={product.productId} >
                        <ProductCard key={product.productId} product={product} />
                     </Link>
               ))
               }
            </div>
            
         </div>
         
      </div>
   )
}
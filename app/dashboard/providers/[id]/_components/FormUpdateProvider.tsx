import { Provider } from "@/entities";
import { Button, Input } from "@heroui/react";
import UpdateProvider from "@/actions/providers/update";

export default async function FormUpdateProvider({provider}:{provider: Provider}){
   const {providerId} = provider
   const updateProviderWithId = await UpdateProvider.bind(null, providerId)
   return(
      <>
         <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 items-center justify-center py-10 mr-10">
            <Input className="max-w-[250px]" required={true} isRequired defaultValue={provider.providerName} label="Nombre completo" placeholder="Nombre del proveedor" name="providerName"/>
            <Input className="max-w-[250px]" required={true} isRequired defaultValue={provider.providerEmail} label="Correo electrónico" placeholder="proveedor@ejemplo.com" name="providerEmail"/>
            <Input className="max-w-[250px]" label="Número de teléfono" defaultValue={provider.providerPhoneNumber} placeholder="4423579165" name="providerPhoneNumber"/>
            <Button color="primary" type="submit"> Actualiza Proveedor </Button>
         </form>
      </>   
   )
}
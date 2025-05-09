'use client';

import { Select, SelectItem } from "@heroui/react";
import { Provider } from "@/entities";

export default function SelectProvider({providers, defaultProvider}:{providers:Provider[], defaultProvider?: string}) {
   return(
      <Select defaultSelectedKeys={defaultProvider ? [defaultProvider] : undefined} label="Proveedor" name="provider">
         {providers.map((provider) => {
            return (
               <SelectItem key={provider.providerId}>
                  {provider.providerName}
               </SelectItem>
            )
         })}
      </Select>
   )
}
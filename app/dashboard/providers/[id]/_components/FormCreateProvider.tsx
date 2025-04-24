import { Input, Button } from "@heroui/react";
import createProvider from "@/actions/providers/create";

export default async function FormCreateManager() {
  return (
    <form action={createProvider} className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2 p-4">
      <h1 className="text-2xl text-white font-semibold text-center">Crear Proveedor</h1>

      <Input required={true} isRequired label="Nombre completo" placeholder="Nombre del proveedor" name="providerName"/>
      <Input required={true} isRequired label="Correo electrónico" placeholder="proveedor@ejemplo.com" name="providerEmail"/>
      <Input label="Número de teléfono" placeholder="4423579165" name="providerPhoneNumber"/>
      <Button color="primary" type="submit"> Crear Proveedor </Button>
    </form>
  );
}
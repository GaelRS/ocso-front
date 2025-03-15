import {Button, Input} from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="bg-orange-500 px-4 py-4 rounded-md">
            <p className="text-2xl my-4 text-white">Iniciar sesion</p>

            <div className="flex flex-col gap-2 y-4 items-center">
                <Input label="Email" type="email" isRequired size="sm"/>
                <Input label="Contraseña" type="password" isRequired size="sm"/>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Button color="primary">Iniciar Sesion</Button>
                <p className="text-white">¿No tienes una cuenta? <Link href="/signup" className="text-red-600 underline">Registrate</Link> </p>    
            </div>
        </div>
    )
}
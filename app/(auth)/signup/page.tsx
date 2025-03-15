import {Button, Input} from "@heroui/react";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="bg-orange-500 px-4 py-4 rounded-md">
            <p className="text-2xl my-4 text-white">Registrarse <span></span> </p>

            <div className="flex flex-col gap-2 y-4 items-center">
                <Input label="Email" type="email" isRequired size="sm"/>
                <Input label="Contraseña" type="password" isRequired size="sm"/>
                <Input label="Repetir contraseña" type="password" isRequired size="sm"/>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Button color="primary">Registrarse</Button>
                <p className="text-white">¿Ya tienes una cuenta? <Link href="/login" className="text-red-600 underline">Inicia Sesion</Link> </p>    
            </div>
        </div>
    )
}
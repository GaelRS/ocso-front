"use client";
import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import Link from "next/link";

export default function LoginPage() {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target); 
        let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        const {data} = await axios.post(`${API_URL}/auth/login`,{
            ...authData
        },{
            withCredentials: true
        });
        console.log(data);
        return;
    };
    return (
        <form className="bg-orange-500 px-4 py-4 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4 text-white">Iniciar sesion</p>

            <div className="flex flex-col gap-2 y-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired size="sm" />
                <Input label="Contraseña" name="userPassword" type="password" isRequired size="sm" />
            </div>

            <div className="flex flex-col items-center gap-2">
                <Button color="primary" type="submit">Iniciar Sesion</Button>

                <p className="text-white">
                    ¿No tienes una cuenta? <Link href="/signup" className="text-red-600 underline">Registrate</Link>{" "}
                </p>
            </div>
        </form>
    );
}
"use client";
import { API_URL } from "@/constants";
import { Button, Input, Spinner } from "@heroui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function LoginPage() {
    const [submitting, setsubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        setsubmitting(true);
        e.preventDefault();
        const formData = new FormData(e.target); 
        let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        try{
            const response = await axios.post(`${API_URL}/auth/login`,{
                ...authData
            },{
                withCredentials: true
            });
            if(response.status === 201){
                router.push("/dashboard");
            }
            setsubmitting(false);
        }catch(e){
            setsubmitting(false);
        }
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
                <Button color="primary" type="submit" disabled={submitting}> {submitting?"Enviando..." : "Iniciar Sesión"}</Button>

                <p className="text-white">
                    ¿No tienes una cuenta? <Link href="/signup" className="text-red-600 underline">Registrate</Link>{" "}
                </p>
            </div>
        </form>
    );
}
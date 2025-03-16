"use client";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginImage from '@/assets/images/login.png'
import GoogleIcon from '@/assets/icons/google.svg'
import Button from "@/components/Button";
import useAuthStore from "@/hooks/useAuthStore";
import Link from "next/link";

export type LoginData = {
    email: string;
    password: string
}

export default function Login() {

    const { register, handleSubmit } = useForm<LoginData>();
    const { login } = useAuthStore();


    const onSubmit: SubmitHandler<LoginData> = async (data) => {
        const credentials: LoginData = { email: data.email, password: data.password }

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + 'api/v1/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            })

            if (response.status === 400) {
                const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + 'api/v1/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials)
                })

                if (response.status === 200) {
                    const userData = await response.json()
                    login(userData)
                    window.alert('success')
                }

                else {
                    console.log(response.status)
                    window.alert("Invalid credentials.")
                }
            }

            else if (response.status === 200) {
                const userData = await response.json()
                login(userData)
                window.alert('success')
            }

            else {
                window.alert("Invalid credentials.")
            }
        }
        catch (error) {
            console.error(error)
        }

    }

    const handleGoogleAuth = () => {
        window.location.href = "oauth url"
    }

    return (
        <div className="bg-black h-dvh w-dvw text-black relative z-0 basefont-medium">
            <Image src={LoginImage} alt="" priority className="object-cover absolute -z-10 h-full w-full fade-mask-black" />
            <div className="flex justify-center items-center h-full">
                <div className="py-10 px-5 bg-white/20 backdrop-blur-sm shadow-xl rounded-2xl flex flex-col items-center">
                    <p className="text-4xl basefont-bold mb-20">Log In</p>
                    <form className="flex flex-col justify-center items-center gap-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
                        <input className="focus:outline-none focus:bg-white transition duration-200 hover:bg-white bg-white/60 py-4 px-4 rounded-xl w-80 border-0" type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Email" />

                        <input className="focus:outline-none focus:bg-white transition duration-200 hover:bg-white bg-white/60 py-4 px-4 rounded-xl w-80 border-0" type="password"
                            {...register("password", { required: "Password is Mandatory" })}
                            placeholder="Password"
                        />
                        <Button content="Sign In" variant="secondary" type="submit" className="px-7" />
                    </form>
                    <div className="mb-4">
                        <p>No account ? <span className="text-white"><Link href={"/register"}>Register</Link></span></p>
                    </div>
                    <div className="border-t-1 border-black w-full flex justify-center items-center py-4 text-white">
                        <div onClick={handleGoogleAuth} className="flex justify-center items-center gap-3 text-sm bg-black px-4 py-3 rounded-4xl hover:scale-95 transition-transform duration-200 cursor-pointer">
                            <Image src={GoogleIcon} alt="" className="size-6" />
                            <p>Sign in with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
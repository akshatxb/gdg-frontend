"use client";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginImage from '@/assets/images/login.png'
import GoogleIcon from '@/assets/icons/google.svg'
import Button from "@/components/Button";
import Link from "next/link";
import useDisable from "../store/useDiable";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isAxiosError } from "axios";
import authApi from "@/lib/api";

export type LoginData = {
    email: string;
    password: string
}

export default function Register() {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginData>();
    const { loading, setloading } = useDisable();
    const router = useRouter()

    const onSubmit: SubmitHandler<LoginData> = async (data) => {
        const credentials: LoginData = { email: data.email, password: data.password }

        try {
            setloading()
            const response = await authApi.post("/register", credentials)
            if (response.status === 200) {
                router.push('/dashboard')
            }
        }
        catch (error) {
            if (isAxiosError(error)) {
                setError("root", { type: "manual", message: error?.response?.data?.message })
            }
            else {
                setError("root", { type: "manual", message: "Unexpected Error" })
            }
        }
        finally {
            setloading()
        }
    }

    const handleGoogleAuth = () => {
        window.location.href = "oauth url"
    }

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await authApi.post("/verify")
                if (response.status === 200) {
                    router.push('/dashboard')
                    return
                }
            }
            catch (error) {
                if (isAxiosError(error)) {
                    if (error?.response?.data?.error === 'expired_token' || error?.response?.data?.error === 'no_token')
                        try {
                            const res = await authApi.post("/refresh")
                            if (res.status === 200) {
                                router.push('/dashboard')
                                return
                            }
                        }
                        catch (error) {
                            if (isAxiosError(error)) {
                                if (error?.response?.data?.error === 'no_token') {
                                    return
                                }
                            }
                        }
                }
                await authApi.post("/logout")
                console.log(error)
                return
            }
        }

        checkAuth();
    }, [router])

    return (
        <div className="bg-black h-dvh w-dvw text-black relative z-0 basefont-medium" >
            <Image src={LoginImage} alt="" priority className="object-cover absolute -z-10 h-full w-full fade-mask-black" />
            <div className="flex justify-center items-center h-full">
                <div className="py-10 px-5 bg-white/20 backdrop-blur-sm shadow-xl rounded-2xl flex flex-col items-center">
                    <p className="text-4xl basefont-bold mb-10">Get Started</p>
                    <form className="flex flex-col justify-center items-center gap-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="min-h-10">
                            {errors.root && <p className="bg-red-500 text-white">{errors.root.message}</p>}
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <input className="focus:outline-none focus:bg-white transition duration-200 hover:bg-white bg-white/60 py-4 px-4 rounded-xl w-80 border-0" type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Email" />


                        <input className="focus:outline-none focus:bg-white transition duration-200 hover:bg-white bg-white/60 py-4 px-4 rounded-xl w-80 border-0" type="password"
                            {...register("password", { required: "Password is Mandatory" })}
                            placeholder="Password"
                        />
                        <Button content="Sign Up" variant="secondary" type="submit" className="px-7" disabled={loading} />

                    </form>
                    <div className="mb-4">
                        <p>Already have an account ? <span className="text-white"><Link href={'/login'}>Log In</Link></span></p>
                    </div>
                    <div className="border-t-1 border-black w-full flex justify-center items-center py-4 text-white">
                        <div onClick={handleGoogleAuth} className="flex justify-center items-center gap-3 text-sm bg-black px-4 py-3 rounded-4xl hover:scale-95 transition-transform duration-200 cursor-pointer">
                            <Image src={GoogleIcon} alt="" className="size-6" />
                            <p>Sign Up with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
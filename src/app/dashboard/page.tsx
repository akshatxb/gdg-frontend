"use client";

import Button from "@/components/Button";
import authApi from "@/lib/api";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter()

    const handleClick = async () => {
        try {
            const response = await authApi.post('/logout')
            if (response.status === 200)
                router.push("/login")
            return
        }
        catch (error) {
            if (isAxiosError(error)) {
                if (error?.response?.data?.error === 'no_token') {
                    router.push("/login")
                    return
                }
            }
            console.log(error)
        }
    }

    return (
        <div className="bg-amber-600">
            <p>This is the dashboard</p>
            <Button variant="primary" size="lg" content="Logout" onClick={handleClick} />
        </div>
    );
}
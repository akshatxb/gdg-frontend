"use client";

import useAuthStore from "@/hooks/useAuthStore"

export default function Dashboard() {

    const { user, isAuthenticated, login, logout } = useAuthStore();

    return (
        <div className="bg-amber-600">
            {isAuthenticated ? (
                <div>Logged In</div>
            ) : (
                <div>Logged Out</div>
            )};
        </div>
    );
}
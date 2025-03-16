"use client";

import useAuth from "../store/useAuth";

export default function Dashboard() {

    const {} = useAuth();

    return (
        <div className="bg-amber-600">
            this is the dashboard
        </div>
    );
}
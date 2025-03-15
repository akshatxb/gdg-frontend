import { create } from "zustand";

interface User {
    email: string,
    name: string,
    avatar?: string
}

interface AuthState {
    user: User | null,
    isAuthenticated: boolean,
    login: (userData: User) => void,
    logout: () => void
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    login: (userData) => set({ user: userData, isAuthenticated: true }),
    logout: () => set({ user: null, isAuthenticated: false })
}))

export default useAuthStore
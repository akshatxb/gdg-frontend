import { create } from "zustand";

export type AuthStates = {
    user: string | null,
    login: (user: string) => void,
    logout: () => void,
}

const useAuth = create<AuthStates>((set) => ({
    user: null,
    login: (user) => set(() => ({ user: user })),
    logout: () => set(() => ({ user: null })),
}))

export default useAuth
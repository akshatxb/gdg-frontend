import { create } from "zustand";

export type DisableState = {
    loading: boolean;
    setloading: () => void
}

const useDisable = create<DisableState>((set) => ({
    loading: false,
    setloading: () => set((state) => ({ loading: !state.loading }))
}))

export default useDisable
import { create } from "zustand";

interface Store {
    value1: string;
    setValue1: (value: string) => void;
    value2: string;
    setValue2: (value: string) => void;
    reset: () => void;
}

export const useStore = create<Store>((set) => ({
    value1: '',
    setValue1: (value) => set({value1: value}),
    value2: '',
    setValue2: (value) => set({value2: value}),
    reset: () => set({value1: '', value2: ''})
}));
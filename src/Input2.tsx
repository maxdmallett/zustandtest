import { useStore } from "./store/store"

export const Input2 = () => {
    const value2 = useStore((state) => state.value2);
    const setValue2 = useStore((state) => state.setValue2);
    console.log('Render input 2');

    return (
        <div className="input-container">
            <input type="text" value={value2} onChange={(e) => setValue2(e.target.value) } />
        </div>
    )
}
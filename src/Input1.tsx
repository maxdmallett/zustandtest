import { useStore } from "./store/store"

export const Input1 = () => {
    const value1 = useStore((state) => state.value1);
    const setValue1 = useStore((state) => state.setValue1);
    console.log('Render input 1');

    return (
        <div className="input-container">
            <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)}/>
        </div>
    )
}
import { useStore } from "./store/store"

export const Preview = () => {
    console.log('Render preview parent');
    return (
        <div className="preview">
            <h2>Output value</h2>
            <Preview1 />
            <Preview2 />
        </div>
    )
}

const Preview1 = () => {
    const value1 = useStore((state) => state.value1);
    console.log('Render preview 1');
    return (
        <p>{value1}</p>
    )
}

const Preview2 = () => {
    const value2 = useStore((state) => state.value2);
    console.log('Render preview 2');
    return (
        <p>{value2}</p>
    )
}

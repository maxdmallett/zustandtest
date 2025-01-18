import { useStore } from './store/store';

export const ResetButton = () => {
    const reset = useStore((state) => state.reset);

    return (
        <button onClick={reset}>Reset</button>
    )
}

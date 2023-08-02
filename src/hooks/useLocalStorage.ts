import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, fallbackValue: T) {
    const [locStorage, setLocStorage] = useState(fallbackValue);
    useEffect(() => {
        const stored = localStorage.getItem(key);
        setLocStorage(stored ? JSON.parse(stored) : fallbackValue);
    }, [fallbackValue, key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(locStorage));
    }, [key, locStorage]);

    return [locStorage, setLocStorage] as const;
}
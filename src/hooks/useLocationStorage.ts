export const useLocalStorage = () => {
    function get<T>(key: string, defaultValue: T): T {
        const value = localStorage.getItem(key);
        if (value === null) return defaultValue;
        try {
            return JSON.parse(value);
        } catch {
            return defaultValue;
        }
    }
    function set<T>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    return {
        get,
        set
    }
}
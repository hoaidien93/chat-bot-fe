import React from "react";

export const useMobileDetect = () => {
    const [width, setWidth] = React.useState<number>(window.innerWidth);

    React.useEffect(() => {
        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return width <= 768;
}
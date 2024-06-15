import { useEffect, useState } from "react";

export function useScrollDirection() {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";

            if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) > 10)) {
                setScrollDirection(direction);
            }
            setScrollPosition(scrollY); // Atualizar a posição atual do scroll
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [scrollDirection]);

    return { scrollDirection, scrollPosition };
}

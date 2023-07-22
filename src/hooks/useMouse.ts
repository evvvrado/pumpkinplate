import { useState, useEffect } from "react";

export const useMouse = () => {
	const [mousePos, setMousePos] = useState({
		x: 0,
		y: 0,
	});

	const handleMouseMove = (event: MouseEvent) => {
		setMousePos({ x: event.clientX, y: event.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mousePos]);

	return mousePos;
};

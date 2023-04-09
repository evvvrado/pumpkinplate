export function lerp(start: number, end: number, speed: number) {
	return start + (end - start) * speed;
}

export function clamp(num: number, min: number, max: number) {
	return num <= min ? min : num >= max ? max : num;
}
export const monthsInPortuguese = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Septembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

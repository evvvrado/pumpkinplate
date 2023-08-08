import { css } from "styled-components";
import theme from "./theme";

type ThemeZIndexes = (typeof theme.z_indexes)[number];
export const z = (name: ThemeZIndexes) => {
	const index = theme.z_indexes.findIndex((item) => item == name) + 1;
	if (!index) return;
	return theme.z_indexes.length - index;
};

type ThemeBreakpoints = keyof typeof theme.breakpoints;
export const media = (breakpoint: ThemeBreakpoints) => {
	return `(max-width: ${theme.breakpoints[breakpoint]})`;
};

export const frame = css`
	overflow: hidden;
	display: block;

	& > img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export const center = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const flex = (
	direction: string,
	align: string,
	justify: string,
	gap?: string | "0px"
) => css`
	display: flex;
	align-items: ${align};
	justify-content: ${justify};
	flex-direction: ${direction};
	gap: ${gap};
`;

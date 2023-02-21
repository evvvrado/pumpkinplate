import { css } from "styled-components";
import theme from "./Theme";

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
	gap: number | undefined = 0
) => `
	display: flex;
	align-items: ${align};
	justify-content: ${justify};
	flex-direction: ${direction};
	gap: ${gap};
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const z = (name: any) => {
	const index = theme.z_indexes.findIndex(name) + 1;
	if (!index) return;
	return index;
};

import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
	@media (prefers-reduced-motion: no-preference) {
		:root {
			scroll-behavior: smooth;
		}
	}

	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		color: inherit;
		font: inherit;
		vertical-align: baseline;
	}

	html {
		font-size: 62.5%;
		font-family: ${theme.fonts.primary};
		scroll-behavior: smooth;
		height: 100%;
		box-sizing: border-box;
		overscroll-behavior: none;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		width: 100%;
		overflow: overlay;
		
		&::-webkit-scrollbar {
			
		}

		&::-webkit-scrollbar-track {
			background: ${theme.scrollbar.backgroundColor};
		}

		&::-webkit-scrollbar-thumb {
			background: ${theme.scrollbar.thumbColor};
			border-radius: ${theme.scrollbar.thumbRadius};
		}

		&::-webkit-scrollbar-thumb:hover {
			cursor: pointer;
			background: ${theme.scrollbar.hoverColor};
		}

		body {
			* {
				box-sizing: border-box;
			}
		}
	}

	body {
		height: 100%;
		overscroll-behavior: none;
		width: 100%;
	}

	::selection {
		color: ${theme.selection.color};
		background: ${theme.selection.background};
	}

	[disabled] {
		pointer-events: none;
		filter: grayscale(0);
	}

	* {
		margin: 0;
		padding: 0;
		border: none;
		box-sizing: border-box;
		list-style: none;
		outline: none;
		text-decoration: none;

		font-size: 1.6rem;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		outline: none;
		-webkit-touch-callout: none;
	}

	a,
	button {
		all: unset;
		cursor: pointer;
		color: inherit;
		outline: none;
		pointer-events: auto;
		text-decoration: none;
		background: none;
		border: none;
		border-radius: none;
		color: inherit;
		font: inherit;
		outline: none;
		pointer-events: auto;
	}

	img {
		max-width: 100%;
		display: block;
	}

	ul,
	ol {
		margin: 0;
	}

	:focus {
		outline: none;
	}

	::-moz-focus-inner {
		border: 0;
	}

	input,
	textarea {
		background: none;
		border: none;
		border-radius: none;
		color: inherit;
		font: inherit;
		outline: none;
		pointer-events: auto;
	}

	textarea {
		resize: none;
	}

	section{
		overflow: hidden;
	}

	img {
		image-rendering: optimizeSpeed;
		image-rendering: -moz-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: optimize-contrast;
		image-rendering: pixelated;
		-ms-interpolation-mode: nearest-neighbor;
	 }
`;

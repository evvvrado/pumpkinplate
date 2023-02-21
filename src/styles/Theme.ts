const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96],
	fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

export const theme = {
	// Functional Variables
	z_indexes: ["splash", "modals", "menu", "header", "super", "content"],
	breakpoints: {
		sm_phone: "480px",
		md_phone: "600px",
		phone: "730px",
		sm_tablet: "992px",
		tablet: "1200px",
		sm_desktop: "1400px",
		desktop: "1920px",
	},

	// Grid Variables
	container_area: 1216,

	// Theme Variables
	scrollbar: {
		width: "",
		backgroundColor: "",
		thumbColor: "",
		thumbRadius: "",
		hoverColor: "",
	},

	selection: {
		color: "",
		background: "",
	},
	// Font Variables
	fontFamilies: {
		primary: '"Arial", sans-serif',
	},
	fontSizes,
	fontWeights,
	lineHeights: {
		normal: 1,
		title: 1.25,
		paragraph: 1.5,
	},
	letterSpacings: {
		normal: "normal",
	},

	// Colors Variables
	colors: {
		primary: "#fff",
		secondary: "#fff",
		tertiary: "#fff",
		background: "#fff",
	},
	defaultColors: {
		color_black: "#000",
		color_white: "#fff",
		color_blue: "#007bff",
		color_indigo: "#6610f2",
		color_purple: "#6f42c1",
		color_pink: "#e83e8c",
		color_red: "#dc3545",
		color_orange: "#fd7e14",
		color_yellow: "#ffc107",
		color_green: "#28a745",
		color_teal: "#20c997",
		color_cyan: "#17a2b8",
		color_grey: "#6c757d",
		color_grey_dark: "#343a40",
		color_success: "#28a745",
		color_info: "#17a2b8",
		color_warning: "#ffc107",
		color_danger: "#dc3545",
		color_light: "#f8f9fa",
		color_dark: "#343a40",
		color_muted: "#616161",
		color_opacity_bg: "rgba(0, 0, 0, 0.74)",
		color_gallery: "#eee",
		color_cod_gray: "#1c1c1c",
	},
};

export default theme;

const theme = {
	z_indexes: ["splash", "modals", "menu", "header", "super", "content"],

	breakpoints: {
		sm_phone: "380px",
		md_phone: "412px",
		phone: "600px",
		lg_phone: "730px",

		sm_tablet: "800px",
		md_tablet: "1150px",
		tablet: "1280px",

		sm_desktop: "1366px",
		md_desktop: "1440px",
		desktop: "1920px",
	},

	container_area: "1216px",

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

	fonts: {
		inter: "var(--inter), sans-serif",
		primary: "var(--inter), sans-serif",
	},

	colors: {
		primary: "#fff",

		neutral: {
			bg: "#13141B",
			one: "#1d242b",
			two: "#313D49",
			three: "#5A636D",
			four: "#8C9197",
			five: "#BCC2C8",
			six: "#F3f4f7",
		},

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

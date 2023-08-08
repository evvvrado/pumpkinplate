const theme = {
	container_area: "1216px",

	z_indexes: ["modals", "header", "element", "content"],

	breakpoints: {
		es_phone: "320px",
		sm_phone: "390px",
		md_phone: "475px",
		lg_phone: "600px",

		sm_tablet: "768px",
		md_tablet: "990px",
		lg_tablet: "1050px",

		es_desktop: "1280px",
		sm_desktop: "1366px",
		md_desktop: "1440px",
		lg_desktop: "1920px",
	},

	fonts: {
		primary: "var(--inter), sans-serif",
	},

	colors: {
		primary: "#fff",

		black: "#000",
		white: "#fff",

		neutral: {
			bg: "#13141B",
			one: "#1d242b",
			two: "#313D49",
			three: "#5A636D",
			four: "#8C9197",
			five: "#BCC2C8",
			six: "#F3f4f7",
		},
	},

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
};

export default theme;

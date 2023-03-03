import { definition } from "./definition";

export const controllers = {
	exemplo: {
		name: "Controller Example",
		title: "Exemplo" + definition.titleTemplate,
		route: "/",
	},
};

export const links = [controllers.exemplo];

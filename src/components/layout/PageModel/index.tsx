import { PageTitle } from "../PageTitle";
import { definition } from "constants/definition";
import React from "react";

type PageModelProps = {
	children?: string | JSX.Element | JSX.Element[];
	title: string;
};

const PageModel: React.FC<PageModelProps> = (props) => {
	return (
		<>
			<PageTitle title={props.title + " " + definition.titleTemplate} />
			{props.children}
		</>
	);
};

export default PageModel;

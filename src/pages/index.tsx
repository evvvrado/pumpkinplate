import { NextPage } from "next";
import { PageTitle } from "../components/layout/PageTitle";

const Home: NextPage = () => {
	return (
		<>
			<PageTitle
				title="home | evvvrado"
				description="Um plate do hyper"
			/>
			<h2>@evvvrado</h2>
		</>
	);
};

export default Home;

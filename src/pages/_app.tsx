import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/reset.css";
import { inter } from "@/styles/fonts";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<style jsx global>{`
				:root {
					--primary: ${inter.style.fontFamily};
				}
			`}</style>

			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
};

export default App;

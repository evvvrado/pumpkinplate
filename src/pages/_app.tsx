import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/Reset.css";

// import { Provider as UrqlProvider } from "urql";
// import { client, ssrCache } from "../providers/ureql";

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--inter",
	weight: ["400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		// <UrqlProvider value={client}>
		<main className={inter.variable}>
			<GlobalStyle />
			<Component {...pageProps} />
		</main>
		//</UrqlProvider>
	);
}

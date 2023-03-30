import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/Reset.css";

// import { Provider as UrqlProvider } from "urql";
// import { client, ssrCache } from "../providers/ureql";

// Fonts

import { Inter } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({
	subsets: ["latin"],
	variable: "--inter",
	weight: ["400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
	// if (pageProps.urqlState) {
	// 	ssrCache.restoreData(pageProps.urqlState);
	// }

	return (
		// <UrqlProvider value={client}>
		<main className={inter.variable}>
			<GlobalStyle />
			<Component {...pageProps} />
		</main>
		//</UrqlProvider>
	);
}

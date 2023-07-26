import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/Reset.css";

// import { Provider as UrqlProvider } from "urql";
// import { client, ssrCache } from "../providers/ureql";

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--inter",
	weight: ["400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
	console.log(
		"\n%cmade with ❤ by %c@evvvrado",
		"text-style:none;  font-family: consolas; color:$white; background-color: #ff3434; padding: 5px; margin-top: 5px; margin-bottom: 15px;",
		"text-style:none;  font-family: consolas; color:#fff; background-color: #ff3434; padding: 5px; margin-top: 5px; margin-bottom: 15px;"
	);

	return (
		// <UrqlProvider value={client}>
		<main className={inter.variable}>
			<GlobalStyle />
			<Component {...pageProps} />
		</main>
		//</UrqlProvider>
	);
}

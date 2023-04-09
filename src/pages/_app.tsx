import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/Reset.css";

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--inter",
	weight: ["400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={inter.variable}>
			<GlobalStyle />
			<Component {...pageProps} />
		</main>
	);
}

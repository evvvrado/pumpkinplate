import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/Reset.css";

import { Provider as UrqlProvider } from "urql";
import { client, ssrCache } from "../providers/ureql";

export default function App({ Component, pageProps }: AppProps) {
	if (pageProps.urqlState) {
		ssrCache.restoreData(pageProps.urqlState);
	}

	return (
		<UrqlProvider value={client}>
			<GlobalStyle />
			<Component {...pageProps} />
		</UrqlProvider>
	);
}

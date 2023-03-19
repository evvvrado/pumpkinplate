import {
	createClient,
	cacheExchange,
	dedupExchange,
	fetchExchange,
	ssrExchange,
} from "@urql/core";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
	url: "",
	exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };

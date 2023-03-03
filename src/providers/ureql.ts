import {
	cacheExchange,
	dedupExchange,
	fetchExchange,
	ssrExchange,
} from "@urql/core";
import { createClient } from "urql";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
	url: "",
	exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };

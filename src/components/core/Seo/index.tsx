import Head from "next/head";
import { definition } from "constants/definition";

export function Seo({
	title = definition.title,
	description = definition.description,
}: SeoType) {
	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>

			<meta name="description" content={definition.description} />
			<meta property="og:description" content={definition.description} />
			<meta name="keywords" content={definition.keywords} />
			<meta name="author" content="evvvrado" />

			<meta property="og:title" content={definition.title} />
			<meta property="og:site_name" content={definition.title} />
			<meta property="og:image" content="/_og.jpg" />
			<meta property="og:image:secure_url" content="/_og.jpg" />
			<meta property="og:image:type" content="png" />
			<meta property="og:image:alt" content="Representação visual" />
			<meta property="og:url" content={definition.url} />
			<meta property="og:locale" content="pt_BR" />
			<meta property="og:type" content="website" />

			<meta name="twitter:title" content={definition.title} />
			<meta name="twitter:description" content={definition.description} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:image" content="/_og.jpg" />
			<meta name="twitter:image:alt" content="Representação visual" />

			<meta name="theme-color" content={definition.theme} />
			<meta
				name="msapplication-navbutton-color"
				content={definition.theme}
			/>
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content={definition.theme}
			/>

			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

			<title>{title}</title>
			<meta name="description" content={description} />
		</Head>
	);
}

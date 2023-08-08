import Head from "next/head";
import definition from "@/constants/definition";

const Seo: React.FC<SeoType> = ({
	title = definition.title,
	description = definition.description,
}) => {
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

			<link
				rel="apple-touch-icon"
				sizes="57x57"
				href="/apple-icon-57x57.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="60x60"
				href="/apple-icon-60x60.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="72x72"
				href="/apple-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="76x76"
				href="/apple-icon-76x76.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-icon-180x180.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/android-icon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/favicon-96x96.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-TileColor" content={definition.theme} />
			<meta
				name="msapplication-TileImage"
				content="/ms-icon-144x144.png"
			/>

			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

			<title>{title}</title>
			<meta name="description" content={description} />
		</Head>
	);
};

export default Seo;

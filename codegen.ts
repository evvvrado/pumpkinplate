import { loadEnvConfig } from "@next/env";
import { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.NEXT_PUBLIC_CMS,
	documents: "./src/graphql/**/*.graphql",
	generates: {
		"src/generated/graphql.tsx": {
			plugins: ["typescript", "typescript-operations", "typescript-urql"],
			config: {
				withHookes: true,
			},
		},
	},
};

export default config;

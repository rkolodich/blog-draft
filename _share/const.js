export const IS_PROD = process.env.NODE_ENV === "prod";

export const ROOT_FOLDER = process.cwd();

export const DEV_PORT = IS_PROD ? null : process.env.PORT || 8080;

export const DOMAIN = IS_PROD
	? process.env.DOMAIN
	: `http://localhost:${DEV_PORT}`;

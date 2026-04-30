export const IS_PROD = process.env.NODE_ENV === "prod";

export const ROOT_FOLDER = process.cwd();

export const DOMAIN = IS_PROD ? process.env.DOMAIN : "http://localhost:8800";

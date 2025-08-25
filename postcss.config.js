import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import { IS_PROD } from "./_share/const.js";

export default {
	plugins: [autoprefixer, ...(IS_PROD ? [csso] : [])],
};

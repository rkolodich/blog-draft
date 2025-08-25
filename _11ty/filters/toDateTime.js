import dayjs from "dayjs";
import "dayjs/locale/ru.js";

export default function toDateTime(date) {
	date = dayjs(date).locale("ru");
	return date.format("D MMMM YYYY HH:mm:ss");
}

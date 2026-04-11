import dayjs from "dayjs";
import "dayjs/locale/ru.js";

export default function toDateTime(date, withSeconds = false) {
	date = dayjs(date).locale("ru");
	return date.format(
		withSeconds ? "D MMMM YYYY HH:mm:ss" : "D MMMM YYYY HH:mm",
	);
}

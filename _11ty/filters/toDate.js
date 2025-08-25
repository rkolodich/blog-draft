import dayjs from "dayjs";
import "dayjs/locale/ru.js";

export default function toDate(date, withoutYear) {
	date = dayjs(date).locale("ru");
	const formatted = withoutYear
		? date.format("D MMMM")
		: date.format("D MMMM YYYY");
	return formatted;
}

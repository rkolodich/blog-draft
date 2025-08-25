import dayjs from "dayjs";

export default function toISODate(date) {
	return dayjs(date).format("YYYY-MM-DD");
}

import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { default as isSatSun } from "./weekend.js";

const today = dayjs();
const displayDay = today.add(5, "days");
const dateString = displayDay.format("MMM D");
console.log("🚀 ~ dateString:", dateString);

const oneMonthLater = today.add(1, "month");
const oneMonthLaterDisplay = oneMonthLater.format("MMM D");
console.log("🚀 ~ oneMonthLaterDisplay:", oneMonthLaterDisplay);

const oneMonthBefore = today.subtract(1, "month");
const oneMonthBeforeDisplay = oneMonthBefore.format("MMM D");
console.log("🚀 ~ oneMonthBeforeDisplay:", oneMonthBeforeDisplay);

const todayDisplay = today.format("dddd");
console.log("🚀 ~ todayDisplay:", todayDisplay);

let date = dayjs();

console.log(date.format("dddd, MMMM D"));
console.log(isSatSun(date));
console.log(isSatSun(date.add(2, "days")));

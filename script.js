"use strict";
let now = new Date();
let date = now.getDate();
let day = now.getDay();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hour = now.getHours();
let min = now.getMinutes();
let amPm;
if (date < 10) {
  date = "0" + date;
}

if (month < 10) {
  month = "0" + month;
}

document.write(month + "-" + date + "-" + year + "<br>");
document.write(date + "-" + month + "-" + year);

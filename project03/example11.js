/*-------------------------------------------- Function Overloads ----------------------------------------------------- */
// new Date(timestamp)
// new Date(year, month, day)
function createDate(dayOrTimestamp, month, year) {
    return month === undefined || year === undefined
        ? new Date(dayOrTimestamp)
        : new Date(year, month, dayOrTimestamp);
}
function createDates(monthOrTimestamp, day, year) {
    return day === undefined || year === undefined
        ? new Date(monthOrTimestamp)
        : new Date(year, monthOrTimestamp, day);
}
createDate(375252776); //Ok
createDate(1, 1, 2023); //Ok

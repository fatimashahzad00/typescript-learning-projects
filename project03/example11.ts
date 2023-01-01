/*-------------------------------------------- Function Overloads ----------------------------------------------------- */
// new Date(timestamp)
// new Date(year, month, day)


function createDate(timestamp: number): Date;
function createDate(day: number, month: number, year: number) : Date;

function createDate(dayOrTimestamp: number, month?: number, year?: number) {
    return month === undefined || year === undefined
    ? new Date(dayOrTimestamp)
    : new Date(year, month, dayOrTimestamp)
}


/*-------------------------------------- Book Example ----------------------------------------------------------------- */
function createDates(timestamp: number): Date;
function createDates(month: number, day: number, year: number): Date;
function createDates(monthOrTimestamp: number, day?: number, year?: number) {
return day === undefined || year === undefined
? new Date(monthOrTimestamp)
: new Date(year, monthOrTimestamp, day);
}

createDate(375252776); //Ok
createDate(1,1,2023); //Ok
createDate(4,1);  //No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments


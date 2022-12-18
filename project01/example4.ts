// let student;  //Type: any

let teacher;   //Type: any
teacher = "Eva";      //Type: string
teacher.toUpperCase();      // ok
console.log(teacher);

teacher = 7;        //Type: number
teacher.toPrecision(1);     //OK

// teacher.toUpperCase();   // Error: toUpperCase not exist on type number
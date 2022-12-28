type imranType =  {
    name: {firstName: string, lastName: string},
    age: number,
    teacher: boolean,
    dob: Date,
    certifications: string[],
};

let imran: imranType;

imran = {
    name: {firstName: "Imran", lastName: "Ali"},
    age: 21,
    teacher: true,
    dob: new Date(),
    certifications: ["AWS", "Docker", "Rust"],
};

//  imran = "Alexander";     //ERROR = Type 'string' is not assignable to type 'imranType'.
export{}
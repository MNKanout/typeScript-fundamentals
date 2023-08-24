// Objects

// Define object
let employee = {id: 1};
// Inserting a new property to the object is invalid
// employee.name = 'Mosh';

// Defining object with two properties with no values
let employeeTwo: {
    id: number, // Specify the types
    name? : string //optional property
} = {id:1, name:"mosh"} // Specify the values

// ReadOnly objects
let employeeThree: {
    readonly id: number,
    name: string,
} = {   id:1,
        name :'mosh',
}

// Functions in objects
let employeeFour: {
    readonly id: number,
    name: string,
    retire: (date:Date) => void
} = {   id:1,
        name :'mosh',
        retire: (date: Date)=> {
        console.log(date)
    }
}

// Type alias
// We use type alias to define the structure of our object such that
// We don't repeat ourselves
// Make the code easy to read and understand

// Define an the type
type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date) => void
}

// Create a new employee using the defined type
let employeeFive: Employee = {
    id: 1,
    name: 'mosh',
    retire: (date:Date) => {
        console.log(date)
    }
}
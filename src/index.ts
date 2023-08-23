// Basic built-in types
// With type annotation
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level: any; 

// Without type annotation
 let sales_1 = 123_456_789;
 let course_1 = 'TypeScript';
 let is_published_1 = true;
 let level_1; // "any" type

//  Arrays
//  With type annotation
let numbers: number[] = [1,2,3] // Array of numbers
let strings: string[] = ['1','2','3'] // Array of strings
let any_array: any[] = [1,"2", true] // Array of different types of elements

//  Without type annotation
let numbers_1 = [1,2,3] // Array of numbers
let strings_1 = ['1','2','3'] // Array of strings
let any_array_1 = [1,"2", true] // Array of different types of elements
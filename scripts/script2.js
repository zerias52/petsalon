// Object literal

let person = {
    name: "John",
    age: 32,
}

//Students

let student1 = {
    name: "Nick",
    email: "nick@test.com",
    grade: 3.12,
}
let student2 = {
    name: "John",
    email: "john@test.com",
    grade: 3.38,
}
let student3 = {
    name: "Dave",
    email: "dave@test.com",
    grade: 3.08,
}

//Print students average grade
let averageGrade = (student1.grade + student2.grade + student3.grade)/3

//Array of objects
let students = [
    student1,
    student2,
    student3,
]

//print name of all students in the array
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name)
// }

//Challenge
let book1 = {
    title:"First Book of Examples",
    author:"First Guy",
    year:2005,
}
let book2 = {
    title:"Duplex Duology",
    author:"Selena Second",
    year:1998,
}
let book3 = {
    title:"Triples",
    author:"Max Man III",
    year:2012,
}
let library = [
    book1,
    book2,
    book3,
]

for (let i=0;i<library.length;i++){
    console.log(library[i].title + ", " + library[i].year)
}
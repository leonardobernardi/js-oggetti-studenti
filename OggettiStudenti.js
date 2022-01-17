const student = {
name: 'Leonardo',
lastName: 'Bernardi',
age: 23
};

for (let key in student) {
    console.log(student[key]);
}

let students = [
    {
        name: 'Liamwen',
        lastName: 'Walkersteel',
        age: 24
    },
    {
        name: 'Jenba',
        lastName: 'Springarrow',
        age: 25
    },
    {
        name: 'Sanniel',
        lastName: 'Mountainboar',
        age: 26
    }
];

students.push(student);

for (let i = 0; i < students.length; i++){
    console.log('Name: ' + students[i].name);
    console.log('Last name: ' + students[i].lastName);
    console.log('//');
}

// console.log('Insert Name: ');
// let newName = prompt();
// console.log('Insert Last Name: ');
// let newLastName = prompt();
// console.log('Insert Age: ');
// let newAge = prompt();

// let newStudent = {
//     name: newName,
//     lastName: newLastName, 
//     age: newAge
// }

// students.push(newStudent);

for(key in students){
    console.log(students[key])
}

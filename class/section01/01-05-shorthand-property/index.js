function example1(param) {
    console.log(param);
    console.log(param.name);
    console.log(param.age);
    console.log(param.school);
}

const name = "철수";
const age = 12;
const school = "다람쥐초";

// const profile = {
//     name: name,
//     age: age,
//     school: school
// }

const profile = { name, age, school } // shorthand-property
//console.log(profile);

example1(profile);
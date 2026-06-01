persons = [
    {
        name: "Guilherme",
        lastName: "Cabrini"
    },
    {
        name: "Julia",
        lastName: "Ribeiro"
    }
];

console.log(persons);

const personsWithCourse = persons.map(person => {
    return {
        ...person,
        course: "Javascript Fundamentals"
    }
});

console.log(personsWithCourse);
console.log(persons);
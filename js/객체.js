const person = {
    name: "peter",
    age: 20,
    job: "programmer",
    talk: (Sentence) => {
        return (Sentence);
    },
    hobbies: {
        hobby1: "reading",
        hobby2: "gaming",
    },
};

// console.log(`hellow my name is ${person.name} my age is ${person.age} and my job is ${person.job}`);

//옅은 복사
// const person2 = person;
// person2.name = "john";
// console.log('first copy', person.name);

// const person3 = { ...person }; //opject.assign({}, person);

// person3.hobbies.hobby2 = "coding";
// console.log('secend copy', person);

//깊은 복사
const deepcopy = (origin) => {
    const result = {};
    for (let key in origin) {
        if (origin[key] !== null && typeof origin[key] == 'object') {
            result[key] = deepcopy(origin[key]);
        }

        else {
            result[key] = origin[key];
        }
    };
    return result;
};
const person4 = deepcopy(person);
console.log('deep copy', person4)
person4.hobbies.hobby2 = "coding";
person4.name = "john";
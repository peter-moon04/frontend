// const array = [1];
// for (let i = 2; i <= 100; i++) {
//     array.push(i);
// };
// const newarray = array.map((e) => e + 100);
// const marged = array.concat(newarray);
// const filterArray = marged.filter((e) => e % 2 === 0);
// const sortarray = filterArray.sort();
// const realsorarray = filterArray.sort((a, b) => b - a);
// console.log(realsorarray);
// const reducearray = realsorarray.reduce((acc, cur) => { return acc + cur });
// console.log(reducearray);

const array1 = [];
const array2 = [];
for (let i = 0; i <= 100; i++) {
    array1.push(i);
};

for (let i = 101; i <= 200; i++) {
    array2.push(i);
};

// const concatarray = array1.concat(array2);
// const filterArray = concatarray.filter((e) => e % 2 === 0); 
// const sortarray = filterArray.sort();
// const reducearray = realsorarray.reduce((acc, cur) => { return acc + cur });

const onecombo = array1.concat(array2).filter((e) => e % 2 === 0).sort().reduce((acc, cur) => { return acc + cur })
console.log(onecombo);
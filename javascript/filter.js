let arr = [{name: "Sukar", age: 25}, {name: "gafild", age: 20}, {name: "Pang", age: 30}, {name: "Money", age: 28}]
let target = arr.filter((obj) => {
    return obj.age>=28;
} );

console.log(target);
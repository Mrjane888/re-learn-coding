let arr = [{name: "Sukar", age: 25}, {name: "gafild", age: 20}, {name: "Pang", age: 30}, {name: "Money", age: 28}]

let target = arr.find((obj) => {
    let targetName = "Sukar"
    return obj.name == targetName;
})
console.log(target)

// แบบย่อ
/*let target = arr.find((obj)=>obj.name=="Sukar");
console.log(target); */
let fruits = [ 'Lemon', 'Kiwi', 'banana', 'apple', 'mango', 'grape' ];

let list = fruits.forEach((obj) => {
    return obj // จะ return undefined ออกมา
});
console.log(list) 

// forEach จะ return ค่าออกมาไม่ได้ ดูได้แค่ในฟังชันเท่านั้น

let listFruits = fruits.forEach((obj)=> {
    console.log(obj);
});
console.log(listFruits);
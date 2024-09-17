let fruits = ["orange", "apple", "mango"];
let a = fruits.length;
console.log(a);

function addFruit (somefruit) {
    fruits.push(somefruit);
    console.log('variable fruts inside fn = ',fruits)
}

let b = addFruit("grape");

addFruit("kiwi")

console.log(fruits)
console.log(fruits.length)

function deleteFruit () {
    fruits.pop(fruits.length -1);
}

deleteFruit();
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift("orange")
console.log(fruits)

fruits[0] = "banana";
console.log(fruits)

// concat array + Array
let arr = []
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let resultArr = arr.concat(arr1,arr2)
console.log(resultArr)
// concat with value
let arr3 = resultArr.concat(7,8,9)
console.log(arr3)

//splice method
let arr4 = [ 'banana', 'apple', 'mango', 'grape' ]
arr4.splice(0, 0, "Lemon", "Kiwi");
console.log(arr4);

for(let i=0; i<arr4.length; i++) {
    console.log(arr4[i]);
}

// forEach
function getValueInArr (item) {
    console.log(item)
}
arr3.forEach(getValueInArr);

// filter
let ages = [25, 18, 12, 37, 64, 32, 23, 17, 31]
function checkAges (age) {
    return age <= 18
}
let man = ages.filter(checkAges);
console.log(man)


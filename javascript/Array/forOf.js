// ref = https://marcuscode.com/lang/javascript/for-in-and-for-of

summation = (...arr1)=>{
    let total = 0
    for(let num of arr1) total += num
    return total
}

console.log(summation(50,100,150))
// Destructuring
// ref = https://www.youtube.com/watch?v=KvNfS86KEA4&list=PLltVQYLz1BMAdESvJff1elnHXpETCmnOt&ab_channel=KongRuksiamOfficial
// time: 1:40:56

// Object
const data = {
    product: 'computer',
    price: 12000,
    amount: 20
}

const  {product, price, amount} = data
console.log(product, price, amount)


// Array
const colors = ['red','yellow', 'blue']
const [,,b] = colors
console.log(b)
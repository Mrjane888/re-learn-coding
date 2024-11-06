// default parameter
// ref = https://www.youtube.com/watch?v=KvNfS86KEA4&list=PLltVQYLz1BMAdESvJff1elnHXpETCmnOt&ab_channel=KongRuksiamOfficial
// time = 1:50:00

getAdd = (fname, add='Bangkok') => {
    const data = `ชื่อลูกค้า: ${fname} ที่อยู่: ${add}`
    return data
 }

console.log(getAdd('Sukar', 'Chaiyaphume'))
console.log(getAdd('Jane'))
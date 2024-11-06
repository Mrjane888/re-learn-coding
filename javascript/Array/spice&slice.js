// splice & slice
// ref = https://www.youtube.com/watch?v=KvNfS86KEA4&list=PLltVQYLz1BMAdESvJff1elnHXpETCmnOt&ab_channel=KongRuksiamOfficial
// time : 2:18:51
   

// splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ, สมาชิกที่ต้องการแทรกเข้าไปแทนที่)
let arr = [10, 20, 30, 40, 50]
arr.splice(2, 2, 100)
console.log(arr)


// slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย -1) จะไม่ทำลายโครงสร้างของอาเรย์เดิม
let arr2 = [1,2,3,4,5,6,7,8,9]
let afterslice = arr2.slice(0,3)
console.log(afterslice)
// Loop for ใช้เวลารู้จำนวนรอบชัดเจน
for (let count = 1; count <= 5; count++) {
    console.log(count)
}


// do while ใช้ตอนอยากให้ลองทำก่อน 1 รอบ
let addNumber = 10;

do {
    console.log(addNumber)
    addNumber--;
} while (addNumber>=-5);


// while ใช้เวลาไม่รู้จำนวนรอบที่แน่ชัด 
let count2 = 0;
while (true) {
    if (count2 == 100) break;
    count2 ++ ; 
    console.log(count2);
}

// สร้าง class
class User {
    name = "Joseph"
    position = "Apprentice"
    // Private
    #salary = 10000
    
    // Parameter Constructor รันเพียงครั้งเดียว
    constructor(n, p, s) {
    this.name = n
    this.position = p
    this.#salary = s

    }

    // สร้าง Method
    showUser() {
        console.log(`ชื่อ : ${this.name}  ตำแหน่ง ${this.position} เงินเดือน ${this.#salary}`)
    }

    // getter
    get Name() {
        return this.name
    }
    get Saraly() {
        return this.#salary
    }

    // setter
    set Saraly(newSaraly) {
        return this.#salary = newSaraly
    }
}

// สร้าง Object
const user1 = new User("Sukar", "Tester", 30000)
console.log(user1.name);
console.log(user1.position);
console.log(user1.salary);

// เรียกใช้ Method
user1.showUser()

const user2 = new User("Zack", "Manager", 50000);
console.log(user2.name);
console.log(user2.position);
// console.log(user2.#salary); ไม่สามารถแก้ไข private นอก class ได้ ต้องใช้ getter & setter
user2.Saraly = 30000
console.log(user2.Saraly)

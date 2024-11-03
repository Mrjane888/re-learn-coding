

class User {
    //protected
    _name
    _password

    constructor(name, password) {
        this._name = name
        this._password = password
    }
    showUser() {
        console.log(`ชื่อ: ${this._name} password: ${this._password}`)
    }
    
    // getter
    get Name () {
        return this._name
    }
    get Password() {
        return this._password
    }

    // setter
    set Name(name) {
        return this._name = name
    }
    set Password(password) {
        return this._password = password
    }
}

class Teacher extends User {
    #course
    constructor(name, password, course) {
        super(name, password) // มาจาก class แม่
        this.#course = course
    }

    showUser() {
        console.log(`คุณครูชื่อ: ${this._name} password: ${this._password} สอนวิชา: ${this.#course}`)
    }

}

class Student extends User {
    #point
    constructor(name, password, point) {
        super(name, password)
        this.#point = point
    }

    showUser() {
        console.log(`นักเรียนชื่อ: ${this._name} password: ${this._password} สอบได้คะแนน: ${this.#point}`)
    }

}

const user1 = new Teacher("Money", 1234, "Kitten")
user1.showUser()

const user2 = new Student("Sukar", 9876, 99)
user2.showUser()




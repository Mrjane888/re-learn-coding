class User {
    name
    #password
    // static เข้าถึงได้เลยผ่าน class
    static type = "ผู้ใช้งานระบบ"
    static data = []

    constructor(name, password) {
        this.name = name
        this.#password = password
    }

    get Password () {
        return this.#password
    }

    set Name(newName) {
        return this.name = newName
    }

    set Password(newPassword) {
        return this.#password = newPassword
    }
    static addUser(newUser) {
        this.data.push(newUser)
    }
    showUser() {
        console.log(`user ${this.name}  password ${this.#password}`)
    }
}

User.addUser(new User("Judi", 1234))
User.addUser(new User("Angust", 567))
User.addUser(new User("Jacob", 8990))

User.data.forEach(element => {
    element.showUser()
});




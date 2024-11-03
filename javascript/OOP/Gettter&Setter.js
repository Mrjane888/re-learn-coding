class Employee {
    name = "Sukar"
    age = 30
    position = "CEO"
    #saraly = 1000000

    // Constructor
    constructor(name, age, position, saraly) {
        this.name = name
        this.age = age
        this.position = position
        this.#saraly = saraly
    }

    // Getter & Setter
    // มาจากแบบนี
    setSaraly(newSaraly) {
        return this.#saraly = newSaraly
    }
    getSaraly () {
        return this.#saraly
    }
    
    // Getter
    get Saraly () {
        return this.#saraly
    }

    set Saraly (newSaraly) {
        return this.#saraly = newSaraly
    }
}

const em1 = new Employee("Gafiele", 25, "Manager", 50000);
console.log(em1)
em1.Saraly = 30000
console.log(em1.Saraly)


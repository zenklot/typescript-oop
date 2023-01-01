interface Teacher {
    name: string;
    age: number;
    phone?: string;
}

let guru : Teacher = { name: 'Supri', age: 16 }

class Guru implements Teacher {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

}
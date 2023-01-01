// Type bisa string, dll
type Phone = number
type PC = string

type Obj = {
    name : string
}


// Interface hanya bisa objek

interface AAA {
    name: string
}

// Bisa di extends (intersection)

interface AAA {
    age: number
}

class Batre implements AAA {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}


// Tidak bisa di gabung
// type Dino = {
//     name: string
// }

// type Dino = {
//     age: number
// }


// Interface bisa menge extends Class

// Merge type 

type Name = {
    name: string
}

type Age = {
    age: number
}

type Employe = Name & Age
type Employee = Name | Employe

const person2 : Employe = {
    name: "John",
    age: 20
}

const person3 : Employee = {
    name: "Jane"
}
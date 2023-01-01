interface Vehicle {
    name : string
    wheel : number
}

interface ICar extends Vehicle {
    doors : number
}

class Civic implements ICar{
    doors: number
    name: string
    wheel: number
    constructor(doors: number, name: string, wheel: number){
        this.doors = doors
        this.name = name
        this.wheel = wheel
    }

}
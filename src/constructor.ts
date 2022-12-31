class Animals {
    name : string;
    leg: number;
    constructor(name: string, leg: number) {
        this.name = name;
        this.leg = leg;
    }
}

class Home {
    constructor(public name: string, public color: string) {}
}

const anjing = new Animals('heli', 4)
console.log(anjing)
const ayam = new Animals('rembo', 2)
console.log(ayam)

const minimalis = new Home('minimalis', 'red')
console.log(minimalis)
const Mewah = new Home('Mewah', 'green')
console.log(Mewah)
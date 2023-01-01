interface AndroidPhone {
    name: string;
    menu(): void;
    home(): void;
    back(): void;
}

class Samsung implements AndroidPhone {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    menu(): void {
        console.log('Menu');
    }
    home(): void {
        console.log('Home');
    }
    back(): void {
        console.log('Back');
    }
}

class Sony implements AndroidPhone {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    menu(): void {
        console.log('Menu');
    }
    home(): void {
        console.log('Home');
    }
    back(): void {
        console.log('Back');
    }
}

class GameA {
    private phone : AndroidPhone;
    constructor(phone : AndroidPhone) {
        this.phone = phone;
    }

    back() {
        console.log('Keluar dari game');
    }

    menu() {
        this.phone.menu()
    }

    home() {
        this.phone.home()
    }
}

const galaxy = new Samsung('Galaxy A')
const gameA = new GameA(galaxy)
gameA.back()
gameA.home()
gameA.menu()
galaxy.back()


interface ApplePhone {
    home() : void;
}

class Iphone {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    home(): void {
        console.log('Home Iphone');
    }
}

const iphone12 = new Iphone('iphone12')
// const gameB = new GameA(iphone12)

class Hewan2 {
    name : string;
    leg: number;
    constructor(name: string, leg: number) {
        this.name = name;
        this.leg = leg;
    }
}

class Katak extends Hewan2 {
    beracun : boolean;

    constructor(name: string, leg:number, beracun: boolean) {
        super(name, leg);
        this.beracun = beracun;
    }
}

const katak = new Katak('Bangkong', 4, false);
console.log(katak)
abstract class Hewan5 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    makan() : void {
        console.log(this.name + ' Sedang Makan');
    }

    abstract bergerak() : void;
}

class Kucing extends Hewan5 {
    constructor(){
        super('Kucing');
    }
    
    bergerak(): void {
        console.log('kucing sedang bergerak')
    }

}

class Burung3 extends Hewan5 {
    constructor(){
        super('Burung 3');
    }
    bergerak(): void {
        console.log('burung sedang terbang')
    }
}

const kucing2 = new Kucing()
kucing2.makan()
kucing2.bergerak()

const burung2 = new Burung3()
burung2.makan()
burung2.bergerak()
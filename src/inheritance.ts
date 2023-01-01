class Hewan1 {
    name : string = '';
    kaki : number = 0;

    bernapas() : void {
        console.log('bernapas')
    }
}

class Burung extends Hewan1 {
    sayap : boolean = false;

    terbang() : void {
        console.log('terbang')
    }
}

const merpati = new Burung();
merpati.sayap = true;
merpati.kaki = 2;
merpati.name = 'Merpati';
console.log(merpati)
merpati.bernapas();
merpati.terbang();
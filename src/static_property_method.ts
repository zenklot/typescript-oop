class Ayam {
    static kaki : number = 2;

    static jalan() {
        console.log('ayam berjalan dengan ' + this.kaki + ' kaki');
    }

    getKaki() {
        // console.log(this.kaki)
        console.log(Ayam.kaki)
    }
}

Ayam.jalan()

const ayam2 = new Ayam();
ayam2.getKaki()

const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();
const ayam6 = new Ayam();
const ayam7 = new Ayam();
const ayam8 = new Ayam();

ayam3.getKaki()
ayam4.getKaki()
ayam5.getKaki()
ayam6.getKaki()
ayam7.getKaki()
ayam8.getKaki()

Ayam.kaki = 4

ayam3.getKaki()
ayam4.getKaki()
ayam5.getKaki()
ayam6.getKaki()
ayam7.getKaki()
ayam8.getKaki()
// Public
// Protected
// Private

class Hewan4 {
    nama: string;
    private kaki: number;
    protected mamalia: boolean;

    constructor(nama: string, kaki: number, mamalia: boolean) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }

    berjalan(): void {
        
    }
}

class Katak2 extends Hewan4 {
    private umurTelur : number = 4;
    private umurKecbong: number = 7;
    private umurKatak : number = 90;

    getUmur() {
        console.log('umur : ', this.umurTelur + this.umurKecbong + this.umurKatak)
        
    }
}

const katak3 = new Katak2('Katak3', 4, false)
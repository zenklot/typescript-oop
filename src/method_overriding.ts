class Hewan3 {
 name: string = '';
 bernapas() : void {
    console.log('sedang bernapas')
 }

}

class Katak1 extends Hewan3 {
    bernapas() : void {
        console.log('masas bernapas')
    }
}

const katak2 = new Katak1() 
katak2.bernapas();
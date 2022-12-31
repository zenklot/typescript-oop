class Store {
    private name : string = 'Store A';
    private profit : number = 1000;

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }

}

class Store2 {
    private name : string = 'Store B';
    private profit : number = 2000;

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }

}

class FashionProduct {
    private store : Store2;
    private name: string;
    private price: number;

    constructor(name: string, price: number){
        this.store = new Store2();
        this.name = name;
        this.price = price;
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

class TechProduct {
    private store : Store;
    private name: string;
    private price: number;

    constructor(name: string, price: number){
        this.store = new Store();
        this.name = name;
        this.price = price;
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}
const baju = new FashionProduct('Baju Batik', 50000)
baju.sell()


// ----------

interface IStore {
    name: string;
    profit: number;
    getProfit(): number;
}

class TokoLama implements IStore {
    name : string = 'Store A';
    profit : number = 1000;

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }

}

class TokoBaru implements IStore {
    name : string = 'Store A';
    profit : number = 2500;

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }

}

class HijabProduct {
    private store : IStore;
    private name: string;
    private price: number;

    constructor(store : IStore, name: string, price: number){
        this.store = store;
        this.name = name;
        this.price = price;
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

class FootProduct {
    private store : IStore;
    private name: string;
    private price: number;

    constructor(store : IStore, name: string, price: number){
        this.store = store;
        this.name = name;
        this.price = price;
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const tokoLama = new TokoLama()
const tokoBaru = new TokoBaru()

const cilok = new HijabProduct(tokoLama, 'Hijab Cilok', 4000)
const cilok2 = new HijabProduct(tokoBaru, 'Hijab Cilok', 4000)
cilok.sell()
cilok2.sell()

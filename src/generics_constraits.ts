function generics2<T> (arg : T) : T {

    return arg
}

interface Length {
    length: number;
}

function generics3<T extends Length> (arg : T) : T {
    console.log(arg.length)
    return arg
}

const generics3a = generics3('dekfefe');
console.log(generics3a)


const generics3b = generics3({length: 10, value: 122});
console.log(generics3b)



interface Produk {
    sell() : void
}

class CarProduct implements Produk {
    sell() : void {
        console.log('sell mobil')
    }
}

class MotorProduct implements Produk {
    sell() : void {
        console.log('sell motor')
    }
}

function genericsConstrait<T extends Produk> (products: T[]) {
    products.forEach(product => {
        product.sell()
    })
}

genericsConstrait([new MotorProduct(), new MotorProduct(), new CarProduct()])


console.log('===============================================================')

function getProperty<T, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4}

console.log(getProperty(x, 'a'))
console.log(getProperty(x, 'b'))
console.log(getProperty(x, 'd'))
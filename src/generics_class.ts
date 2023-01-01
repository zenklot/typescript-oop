interface Generics3<T> {
    propA : T,
    methodA() : T
}

class GenericsClass<T> implements Generics3<T> {
    propA: T;

    constructor(propA: T){
        this.propA = propA;
    }

    methodA(): T {
        return this.propA;
    }
}
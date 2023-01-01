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


class ClassA {
    name : string = "ClassA";
}

class ClassB<T> {
    classProps: T
    constructor(classProps: T) {
        this.classProps = classProps;
    }
}

const classA = new ClassA()
const classB = new ClassB(classA);
class Cars {
    name : string = ""
    color : string = "";
    wheels : number = 0;
    sport : boolean = false

    start() {
        console.log(`${this.name} dinyalakan`)
    }
}

const bus = new Cars();
bus.name = "Sinar Jaya"
bus.color = "red"
bus.wheels = 6
console.log(bus)
bus.start()
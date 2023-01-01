class Burung2 {
    private kaki : number = 2

    getKaki() : number {
        return this.kaki
    }

    terbang() : void {
        console.log('terbang called')
    }

    async makan() : Promise<string> {
        return 'string'
    }
}
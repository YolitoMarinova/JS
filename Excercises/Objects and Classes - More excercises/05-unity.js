class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (typeof otherRat === typeof new Rat('')) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = [];

        result.push(this.name);

        if (this.unitedRats.length > 0) {
            this.unitedRats.forEach(r => result.push(`##${r.name}`));
        }
        return result.join('\n');
    }
}
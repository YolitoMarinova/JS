class List {
    constructor() {
        this._list = [];
        this.size = 0;
    }

    add(element) {
        this._list.push(element);
        this.size++;
        this._list.sort((a, b) => a - b);
    };

    remove(index) {
        if (index >= 0 && index <= this._list.length - 1) {
            this._list.splice(index, 1);
            this.size--;
        }
    };

    get(index) {
        if (index >= 0 && index <= this._list.length - 1) {
            return this._list[index];
        }
    };
}
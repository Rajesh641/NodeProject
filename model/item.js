const item = [];

module.exports = class Item {
    constructor(t) {
        this.title = t;
    }

    save() {
        item.push(this);
    }

    static fetchAll() {
        return item;
    }
}
class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(amount) {
        this.inStock += amount
        return this.inStock
    }
    calculateDiscount(prc) {
        const discount = this.price * (prc/100)
        return this.price - discount
    }
}

module.exports = Product
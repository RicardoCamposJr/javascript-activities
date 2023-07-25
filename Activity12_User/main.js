const User = require("./User")
const Product = require("./Product")

const user = new User("Ricardo", "rickoliver001@hotmail.com", "abc")

if (user.login("rickoliver001@hotmail.com", "abc")) {
    console.log("Login bem sucedido")
} else {
    console.log("Login não sucedido")
}

const product = new Product("Mouse", "Periférico para computador", 100.00)
console.log(product.addToStock(10))
console.log(product.addToStock(10))
console.log(product.calculateDiscount(10))
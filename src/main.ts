import { Product } from "./models/Product";
import { Cart } from "./models/Cart";
import { InMemoryStorage } from "./storage/InMemoryStorage";
import { LocalStorageClass } from "./storage/LocalStorage";

// Create products
const apple = new Product("Apple", 1.5);
const banana = new Product("Banana", 1.0);
const orange = new Product("Orange", 1.2);



//Liskov Substitution Principle (LSP) 
// La classe Cart peut utiliser n'importe quel type de stockage qui implémente l'interface Storable, 
//comme InMemoryStorage ou LocalStorageClass.
const memoryStorage = new InMemoryStorage<Product>();
const localStorage = new LocalStorageClass<Product>("cart");

const cart = new Cart(localStorage);

cart.addProduct(apple);
cart.addProduct(banana);
cart.addProduct(orange);


cart.listProducts();


console.log(`Total: $${cart.getTotal()}`);


cart.removeProduct(banana);


cart.listProducts();
console.log(`Total: $${cart.getTotal()}`);


cart.removeAllProduct()



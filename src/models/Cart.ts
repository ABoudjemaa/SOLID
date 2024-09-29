import { Storable } from "../storage/Storable";
import { Product } from "./Product";

//Dependency Inversion Principle (DIP) :
//La classe Cart dépend de l'abstraction Storable au lieu de dépendre directement 
// d'une implémentation concrète comme InMemoryStorage. -
export class Cart {
    constructor(private storage: Storable<Product>) { }

    addProduct(product: Product): void {
        this.storage.save(product);
        console.log(`${product.name} a été ajouté au panier.`);
    }

    removeProduct(product: Product): void {
        this.storage.remove(product);
        console.log(`${product.name} a été retiré du panier.`);
    }

    removeAllProduct(): void {
        this.storage.removeAll()
        console.log(`Tout a été retiré du panier.`);
    }

    getTotal(): number {
        const products = this.storage.getAll();
        return products.reduce((total, product) => total + product.price, 0);
    }

    listProducts(): void {
        const products = this.storage.getAll();
        console.log("Produits dans le panier:")
        products.forEach(product => console.log(`${product.name} - $${product.price}`));
    }
}

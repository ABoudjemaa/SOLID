
import { Storable } from "./Storable";
import { LocalStorage } from "node-localstorage";

let localStorage = new LocalStorage("./scratch");


// Open/Closed Principle (OCP) :
//Nous pouvons ajouter d'autres types de stockage (comme LocalStorageClass) sans modifier le code existant.
//Le code est ouvert à l'extension, mais fermé à la modification.
export class LocalStorageClass<T extends { name: string }> implements Storable<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  save(item: T): void {
    const items = this.getAll();
    items.push(item);
    localStorage.setItem(this.key, JSON.stringify(items));
  }

  getAll(): T[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  remove(item: T): void {
    const items = this.getAll();
    const updatedItems = items.filter(storedItem => storedItem.name !== item.name);
    localStorage.setItem(this.key, JSON.stringify(updatedItems));
  }

  removeAll(): void {
    localStorage.removeItem(this.key); // Clear all items
  }
}

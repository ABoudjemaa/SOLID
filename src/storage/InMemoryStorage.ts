import { Storable } from "./Storable";


// Open/Closed Principle (OCP) :
//Nous pouvons ajouter d'autres types de stockage (comme InMemoryStorage) sans modifier le code existant.
//Le code est ouvert à l'extension, mais fermé à la modification.
export class InMemoryStorage<T> implements Storable<T> {
    private storage: T[] = [];

    save(item: T): void {
        this.storage.push(item);
    }

    getAll(): T[] {
        return [...this.storage];
    }

    remove(item: T): void {
        const index = this.storage.indexOf(item);
        if (index > -1) {
            this.storage.splice(index, 1);
        }
    }

    removeAll(): void {
        this.storage = [];
    }
}

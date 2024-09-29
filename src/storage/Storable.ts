//Interface Segregation Principle (ISP) :

//L'interface Storable ne force pas les classes à implémenter des méthodes inutiles. 
//Elle est simple et claire : save, getAll, remove et removeAll.
export interface Storable<T> {
  save(item: T): void;
  getAll(): T[];
  remove(item: T): void;
  removeAll(): void;
}

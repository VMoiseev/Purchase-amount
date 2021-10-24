import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  summWithoutDiscount(): number {
    return this._items.reduce((acc: number, item: Buyable) => acc + item.price, 0);
  }

  summWithDiscount(discount: number): number {
    return this.summWithoutDiscount() * discount / 100;
  }

  deleteItem(id: number): void {
    const index = this.items.findIndex((item) => item.id === id);
    this._items.splice(index, 1);
  }
}

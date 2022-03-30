// eslint-disable-next-line max-len
export abstract class BasicStremeableCollection<T extends {name: string}> {
  constructor(protected items: T[]) {
  }

  addItem(newItem: T) {
    this.items.push(newItem);
  }

  abstract getItems(searchTerm: string): T[];

  getNumberOfItems() {
    return this.items.length;
  }
  abstract search(name:string): T[];
}

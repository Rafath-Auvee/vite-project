export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _Item: string = "",
    private _checked: boolean = false
  ) {}

  get id(): string {
    return this._id;
  }

  set_id(id: string) {
    this._id = id;
  }



  get Item(): string {
    return this._Item;
  }

  set_Item(Item: string) {
    this._Item = Item;
  }

  

  get checked(): boolean {
    return this._checked;
  }

  set_checked(checked: boolean) {
    this._checked = checked;
  }
}

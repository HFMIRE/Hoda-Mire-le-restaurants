export interface ItemProp {
  quantity?: number | undefined;
  _id: string;
  name: string;
  description: string;
  price: number;
  allergies: [string];
  type: string;
  image: string;
}

export interface ItemMapProp {
  item: ItemProp;
  idx: number;
}
export interface MenuProp {
  menu: [ItemProp];
}
export interface OrderProp {
  orderItem: [ItemProp];
}

export interface ItemData {
  data: ItemProp;
}
export interface AdditionalInfoProps {
  allergies: [string];
}

export interface CartItem {
  item: ItemProp;
}
export interface ProductPageProp {
  data: ItemProp;
  error: string;
}

import { CartItem } from "./item.interface";

export interface Cart {
    [brand: string]: CartItem[]
}

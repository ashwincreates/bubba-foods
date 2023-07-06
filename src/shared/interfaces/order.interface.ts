import { Item } from "./item.interface"

export interface Order {
    id: string
    date: Date
    items: Item[]
}

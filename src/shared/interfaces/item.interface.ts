export interface Item {
    id: string
    name: string
    description: string
    price: number
    img_url: string
    rating: number
    brand_id: string
}

export interface CartItem extends Item {
    quantity: number
    addons: Item[]
}

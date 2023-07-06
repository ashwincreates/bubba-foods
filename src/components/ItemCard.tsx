import { ReactNode } from 'react'
import { Star } from "react-feather"
import { Link } from "react-router-dom"
import { Item } from "../shared/interfaces/item.interface"

function ItemCard({menuItem, to, action, offer, onClick}: {menuItem: Item, to?: string, offer?: ReactNode, action?: ReactNode, onClick?: any}) {
    return (
        <Link to={to!} onClick={onClick} id={menuItem.id}>
            <div className="rounded overflow-hidden border bg-white flex-col flex align-start">
                <img className="object-cover h-[250px]" src={menuItem.img_url} alt="item" />
                <div className="p-3">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="font-bold">{menuItem.name}</h1>
                            <p className="text-sm text-gray-400">{menuItem.description}</p>
                        </div>
                        <div className="text-white rounded-full px-2 py-1 bg-green-800 flex self-start text-sm gap-1"><span>{menuItem.rating}</span> <Star fill="white" size={18} /></div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between">
                        <span className="text-lg font-bold" >Rs. {menuItem.price}</span>
                        {action}
                    </div>
                </div>
                {offer}
            </div>
        </Link>
    )
}

export default ItemCard

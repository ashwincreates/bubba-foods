import { Star } from "react-feather"
import { Link } from "react-router-dom"

function ItemCard({menuItem, to, action, offer, onClick}) {
    return (
        <Link to={to} onClick={onClick} id={menuItem.id}>
            <div className="rounded md:hover:scale-105 ease-in duration-50 overflow-hidden drop-shadow-md bg-white flex-col w-[300px] flex align-start">
                <img className="object-cover h-[250px]" src={menuItem.src} alt="item" />
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

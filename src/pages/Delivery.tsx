import { useContext, useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Menu from "../components/Menu/Menu";
import { Item } from "../shared/interfaces/item.interface";
import { useBrand } from "../hooks/BrandContext";
import { useCart } from "../hooks/CartContext";
import { useItem } from "../hooks/FoodItemModalContext";

function Delivery() {
    const { id } = useBrand()
    const { setItemDialog } = useItem()
    const [menu, setMenu] = useState<{ [section: string]: Item[] }>({
        "Today's Special": [
            {
                id: '5f300ee5-9a1e-4f7f-ba5a-de359fc71d70',
                name: "Palak Paneer",
                description: "North Indian Delicacy",
                price: 120,
                img_url: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
                rating: 3,
                brand_id: "6c1af82f-7f3a-45d2-ad5d-91c2a77a7a3b",
                quantity: 0,
                addons: []
            }
        ],
        "Restaurant Special": [
            {
                id: '5f300ee5-9a1e-4f7f-ba5a-de359fc71d70',
                name: "Palak Paneer",
                description: "North Indian Delicacy",
                price: 120,
                img_url: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
                rating: 3,
                brand_id: "6c1af82f-7f3a-45d2-ad5d-91c2a77a7a3b",
                quantity: 0,
                addons: []
            }
        ]
    })

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}/menu/get/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // Grouping items based on Speciality
    //             const menu_data = data.reduce((groups, item) => {
    //                 const group = (groups[item.Speciality__c] || []);
    //                 group.push(item);
    //                 groups[item.Speciality__c] = group;
    //                 return groups;
    //             }, {});
    //             setMenu(menu_data)
    //         })
    // }, [id])

    return (
        <div className="mx-3 flex">
            <Menu menu={menu} />
            <main className="px-4 border-l">
                {
                    Object.keys(menu).map((e: string) =>
                        <>
                            <h1 className="py-4" id={`${e.toLowerCase().replace(' ', '_')}`}>{`${e}`} </h1>
                            <section className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-10">
                                {
                                    menu[e].map((item: Item) =>
                                        <ItemCard
                                            menuItem={item}
                                            action={<button className="primary-button">Add</button>}
                                            onClick={() => setItemDialog(item)}
                                        />
                                    )
                                }
                            </section>
                        </>
                    )
                }
            </main>
        </div>
    )
}

export default Delivery

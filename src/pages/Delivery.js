import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import Menu from "../components/Menu/Menu";
import { BrandContext } from "../context/BrandContext";
import { FoodItemModalContext } from "../context/FoodItemModalContext";

function Delivery() {
    const { id } = useContext(BrandContext)
    const { openModal } = useContext(FoodItemModalContext)
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/menu/${id}`)
            .then(response => response.json())
            .then(data => {
                // Grouping items based on Speciality
                const menu_data = data.reduce((groups, item) => {
                    const group = (groups[item.Speciality__c] || []);
                    group.push(item);
                    groups[item.Speciality__c] = group;
                    return groups;
                }, {});
                setMenu(menu_data)
            })
    }, [id])

    return (
        <div className="mx-3 md:mx-4 flex gap-4">
            <Menu menu={menu}/>
            <main className="overflow-auto no-scrollbar h-[calc(100vh_-_100px)] scroll-smooth px-2">
                {
                    Object.keys(menu).map(e =>
                        <>
                            <Header title={`${e}`} id={`${e.toLowerCase().replace(' ', '_')}`} />
                            <section className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-10">
                                {
                                    menu[e].map(item =>
                                        <ItemCard
                                            menuItem={{
                                                src: item.Image_Url__c,
                                                name: item.Name__c,
                                                description: item.Description__c,
                                                price: item.Price__c,
                                                rating: item.Ratings__c
                                            }}
                                            action={<button className="primary-button">Add</button>}
                                            offer={
                                                <div className="p-2 bg-orange-200 text-orange-400 text-sm">
                                                    Grab Now over 50% off
                                                </div>
                                            }
                                            onClick={(_) => openModal(item)}
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

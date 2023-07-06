import { useContext, useEffect, useState } from "react";
import Brands from '../components/Brands/Brands';
import AdCarousel from "../components/Carousel/adCarousel";
import Carousel from '../components/Carousel/Carousel';
import ItemCard from "../components/ItemCard";
import { Item } from "../shared/interfaces/item.interface";
import { useItem } from "../hooks/FoodItemModalContext";


function HomePage() {

    const [menu, setMenu] = useState<Item[]>([
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
    )
    const { setItemDialog } = useItem()

    useEffect(() => {
        // fetch(`${process.env.REACT_APP_API_URL}/menu/homepage`)
        //     .then(response => response.json())
        //     .then(data => {
        //         // Grouping items based on Speciality
        //         const menu_data = data.reduce((groups, item) => {
        //             const group = (groups[item.Speciality__c] || []);
        //             group.push(item);
        //             groups[item.Speciality__c] = group;
        //             return groups;
        //         }, {});
        //         console.log(menu_data)
        //         setMenu(menu_data)
        //     })
    }, [])


    return (
        <>
            <AdCarousel />
            <main className='max-md:px-2 md:max-w-6xl m-auto'>
                <section className='flex flex-col items-center justify-center w-full min-h-[300px]'>
                    <h1 className="mb-8 text-gray-500">Top Brands</h1>
                    <Brands />
                </section>
                <h1 className="my-4">Our Pick</h1>
                <section className="grid grid-cols-4 gap-3">
                    {
                        [1, 2, 3, 4, 5].map((item: number) =>
                            <ItemCard key={item}
                                menuItem={menu[0]}
                                action={<button className="primary-button">Add</button>}
                                onClick={(_: any) => setItemDialog(menu[0])}
                            />
                        )
                    }
                </section>
            </main>
        </>
    )
}

export default HomePage;

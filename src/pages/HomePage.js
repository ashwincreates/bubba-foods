import { useContext, useEffect, useState } from "react";
import Brands from '../components/Brands/Brands';
import AdCarousel from "../components/Carousel/adCarousel";
import Carousel from '../components/Carousel/Carousel';
import Header from '../components/Header';
import ItemCard from "../components/ItemCard";
import { FoodItemContext } from "../context/FoodItemModalContext";
import { UserContext } from "../context/UserContext";


function HomePage() {

    const [menu, setMenu] = useState([])
    const { openModal } = useContext(FoodItemContext)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/menu/homepage`)
            .then(response => response.json())
            .then(data => {
                // Grouping items based on Speciality
                const menu_data = data.reduce((groups, item) => {
                    const group = (groups[item.Speciality__c] || []);
                    group.push(item);
                    groups[item.Speciality__c] = group;
                    return groups;
                }, {});
                console.log(menu_data)
                setMenu(menu_data)
            })
    }, [])


    return (
        <>
            <AdCarousel />
            <main className='max-md:px-2 md:max-w-6xl m-auto'>
                <Header title="Top Brands" />
                <section className='flex gap-4 mb-4 w-full'>
                    <Brands />
                </section>
                {
                    Object.keys(menu).map(section =>
                        <>
                            <Header title={section} />
                            <section className="flex gap-3 snap-x scroll-smooth scroll-pl-4 overflow-x-scroll py-4 no-scrollbar">
                                {
                                    menu[section].map(item =>
                                        <ItemCard key={item.Id}
                                            menuItem={{
                                                src: item.Image_Url__c,
                                                name: item.Name__c,
                                                rating: item.Ratings__c,
                                                description: item.Description__c,
                                                price: item.Price__c
                                            }}
                                            action={<button className="primary-button">Add</button>}
                                            onClick={(_) => openModal(item)}
                                        />
                                    )
                                }
                            </section>
                        </>
                    )
                }
            </main>
        </>
    )
}

export default HomePage;

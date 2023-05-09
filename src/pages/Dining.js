import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import { BrandContext } from "../context/BrandContext";

function Dining() {

    const { id } = useContext(BrandContext)
    const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/restaurant/${id}`)
            .then(response => response.json())
            .then(data => {
                setRestaurant(data)
            })
    }, [id])

    return (
        <div className="mx-4">
            <main>
                <Header title="All Restaurants" />
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-10">
                    {
                        restaurant.map(res =>
                            <ItemCard
                                menuItem={{
                                    src: res.Image_URL__c,
                                    name: res.Name__c,
                                    description: res.Address__c,
                                    price: 0
                                }}
                                to="./restaurant/reviews"
                            />
                        )
                    }
                </section>
            </main>
        </div>
    )
}

export default Dining

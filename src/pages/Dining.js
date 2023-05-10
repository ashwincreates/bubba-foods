

import { useContext, useEffect, useState } from "react";



import { Link } from "react-router-dom";

import Header from "../components/Header";

import ItemCard from "../components/ItemCard";
import { BrandContext } from "../context/BrandContext";






function Dining() {



    const { id } = useContext(BrandContext)

    const [restaurant, setRestaurant] = useState([])



    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}/restaurant/get/${id}`)

            .then(response => response.json())

            .then(data => {

                console.log(data)

                setRestaurant(data)

            })

    }, [id])



    return (

        <div className="mx-3 md:mx-4 flex gap-4">

            <main>

                <Header title="Near By You" />

                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-10">

                    {

                        restaurant.map(item =>

                            <ItemCard

                                menuItem={{

                                    src: item.Image_URL__c,

                                    name: item.Name__c,

                                    description: item.Address__c,



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



// to = "./restaurant/reviews"
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { useBrand } from "../hooks/BrandContext";

function Dining() {
    const { id } = useBrand()
    const [restaurant, setRestaurant] = useState([])

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}/restaurant/get/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setRestaurant(data)
    //         })
    // }, [id])

    return (
        <div className="mx-3 md:mx-4 flex gap-4">
            <main>
                <h1>Near By You</h1>
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-10">
                    {
                        // restaurant.map(item =>
                        // )
                    }
                </section>
            </main>

        </div>

    )

}



export default Dining



// to = "./restaurant/reviews"

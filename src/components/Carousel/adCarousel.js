import { useContext, useEffect, useState } from "react";
import Carousel from "./Carousel";
import { BrandContext } from "../context/BrandContext";

export default function AdCarousel() {

    const { id } = useContext(BrandContext)
    const [ads, setAds] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/ad/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAds(data)
            })
    }, [])

    return (
        <Carousel className="md:max-w-6xl m-auto relative">
            {
                ads.map(e =>
                    <Carousel.AdItem key={e} src={"https://images.unsplash.com/photo-1606491956689-2ea866880c84"} />
                )
            }
        </Carousel>
    )
}

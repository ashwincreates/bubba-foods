import { useContext, useEffect, useState } from "react";
import { BrandContext } from "../../context/BrandContext";
import Carousel from "./Carousel";

export default function AdCarousel() {

    // const brand = useContext(BrandContext)
    // const [ads, setAds] = useState([])

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_ADS_URL}/ads/${brand ? brand.id : ''}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setAds(data)
    //         })
    // }, [brand])

    return (
        <Carousel className="m-auto relative">
            <Carousel.Item src={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>
            <Carousel.Item src={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>
        </Carousel>
    )
}

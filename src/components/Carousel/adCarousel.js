import { useContext, useEffect, useState } from "react";
import Carousel from "./Carousel";
import { BrandContext } from "../context/BrandContext";

export default function adCarousel(){

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

    )
    

}
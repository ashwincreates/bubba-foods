import { useContext, useEffect, useState } from "react";
import { BrandContext } from "../../context/BrandContext";
import Carousel from "./Carousel";

export default function AdCarousel() {

    const brand = useContext(BrandContext)
    const [ads, setAds] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_ADS_URL}/ads/${brand ? brand.id : ''}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAds(data)
            })
    }, [brand])

    return (
        <Carousel className="m-auto relative">
            {
                ads.map(ad =>
                    <Carousel.AdItem src={ad.Image__c} goto={ad.Go_to__c}/>
                )
            }
        </Carousel>
    )
}

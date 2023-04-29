import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Brands({ src, to }) {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/brand/brands`)
            .then(response => {console.log(response.body); return response.json()})
            .then(data => {setBrands(data);console.log(data)})
    }, [])

    return (
        <>
            {
                brands.map((brand) =>
                    <Link to={`${brand.Name__c}/${brand.Id}/delivery`} className='rounded-full overflow-hidden md:grow md:rounded-lg flex h-[100px]'>
                        <img className='object-cover w-full' src={`/images/${brand.Name__c}.png`} alt="brand logo" />
                    </Link>
                )

            }
        </>
    )
}

export default Brands
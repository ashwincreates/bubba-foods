import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brand } from '../../shared/interfaces/brands.interface';

function Brands() {

    const [brands, setBrands] = useState<Brand[]>([
        {
            id: 'awdawdwad',
            name: 'Krispy Kukkad',
            description: '',
            icon: '',
        },
        {
            id: 'awdawdwad',
            name: 'Krispy Kukkad',
            description: '',
            icon: '',
        },
        {
            id: 'awdawdwad',
            name: 'Krispy Kukkad',
            description: '',
            icon: '',
        }
    ])

    useEffect(() => {
        // fetch(`${process.env.REACT_APP_API_URL}/brand/brands`)
        //     .then(response => {console.log(response.body); return response.json()})
        //     .then(data => {setBrands(data);console.log(data)})
    }, [])

    return (
        <div className='flex gap-8'>
            {
                brands.map((brand) =>
                    <Link
                        to={`brands/${brand.id}/delivery`}
                        className='drop-shadow-md rounded-full bg-gray-100 rounded-full overflow-hidden flex h-[100px] w-[100px]'
                    >
                        <img className='object-cover w-full' src={`/images/${brand.icon}.png`} alt="brand logo" />
                    </Link>
                )

            }
        </div>
    )
}

export default Brands

import { useContext, useEffect, useState } from "react";
import Brands from '../components/Brands/Brands';
import Carousel from '../components/Carousel/Carousel';
import Header from '../components/Header';


function HomePage() {

 const [menu, setMenu] = useState([])

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
                setMenu(menu_data)
            })
    }, [])


    return (
        <>
            {/* Advertisement Carousel */}
            <Carousel className="md:max-w-6xl m-auto relative">
                {
                    [1, 2, 3].map(e =>
                        <Carousel.Item  key={e} src={"https://genpact33-dev-ed.develop.file.force.com/sfc/servlet.shepherd/version/renditionDownload?rendition=ORIGINAL_Png&versionId=0685i00000BUrc8&operationContext=CHATTER&contentId=05T5i00000dZ01F"} />
                    )
                }
            </Carousel>
            {/* ---- */}
            <main className='max-md:px-2 md:max-w-6xl m-auto'>
                <Header title="Top Brands" />
                <section className='flex gap-4 mb-4 w-full overflow-hidden'>
                    <Brands />
                </section>
                <Header title="Today's Special" />
                <Carousel>
                    {
                        [1, 2, 3, 5, 6, 7, 8, 9].map(e =>
                            <Carousel.MenuItem key={e} menuItem={{
                                src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
                                name: 'Paradise Biryani',
                                description: 'Paradise Biryani very yummy',
                                price: 999
                            }} />
                        )
                    }
                </Carousel>
                <Header title="Festive Special" />
                <Carousel>
                    {
                        [1, 2, 3, 5, 6, 7, 8, 9].map(e =>
                            <Carousel.MenuItem key={e} menuItem={{
                                src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
                                name: 'Paradise Biryani',
                                description: 'Paradise Biryani very yummy',
                                price: 999
                            }} />
                        )
                    }
                </Carousel>
            </main>
        </>
    )
}

export default HomePage
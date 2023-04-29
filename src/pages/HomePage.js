import Brands from '../components/Brands/Brands';
import Carousel from '../components/Carousel/Carousel';
import Header from '../components/Header';

function HomePage() {
    return (
        <>
            {/* Advertisement Carousel */}
            <Carousel className="md:max-w-4xl m-auto relative">
                {
                    [1, 2, 3].map(e =>
                        <Carousel.Item key={e} src={"https://images.unsplash.com/photo-1606491956689-2ea866880c84"} />
                    )
                }
            </Carousel>
            {/* ---- */}
            <main className='max-md:px-2 md:max-w-4xl m-auto'>
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
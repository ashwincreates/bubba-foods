import { Link } from "react-router-dom";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";

function Dining() {
    return (
        <div className="mx-3 md:mx-4 flex gap-4">
            <main>
                {
                    [1, 2].map(e =>
                        <>
                            <Header title="Near By You" id={`${e}`} />
                            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-10">
                                {
                                    [1, 2, 3, 4, 5].map(e =>
                                        <ItemCard
                                            menuItem={{
                                                src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
                                                name: 'Biryouzi',
                                                description: 'Near Gachibowli, X Road',
                                                price: 999
                                            }}
                                            to="./restaurant/reviews"
                                        />
                                    )
                                }
                            </section>
                        </>
                    )

                }
            </main>
        </div>
    )
}

export default Dining
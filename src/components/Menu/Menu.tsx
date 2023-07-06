import { useLocation } from "react-router-dom"

function Menu({ menu }: { menu: any }) {
    const { hash } = useLocation()
    return (
        <nav className="min-w-[250px] min-h-full sticky top-[96px] self-start hidden md:block h-full">
            <h1 className="py-3">Menu</h1>
            <ol className="flex flex-col">
                {
                    Object.keys(menu).map(e =>
                        <a
                            href={`#${e.toLowerCase().replace(' ', '_')}`}
                            className={`px-4 py-3 text-sm ${"#" + e.toLowerCase().replace(' ', '_').toString() === hash ? "text-orange-500 bg-orange-100 border-r-2 border-orange-500" : " hover:bg-white hover:text-gray-800 text-sm text-gray-400 "}`}>
                            {`${e}`}
                        </a>
                    )
                }
            </ol>
        </nav>
    )
}

export default Menu

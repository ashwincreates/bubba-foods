import { useLocation } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import Header from "../Header"

function Menu({ menu }) {
    const { hash } = useLocation()
    return (
        <nav className="min-w-[250px] sticky top-[72px] border-r hidden md:block">
            <Header title={"Menu"} />
            <ol className="flex flex-col">
                {
                    Object.keys(menu).map(e =>
                        <NavHashLink smooth 
                            to={`#${e.toLowerCase().replace(' ', '_')}`} 
                            className={`px-4 py-3 text-sm ${"#" + e.toLowerCase().replace(' ', '_').toString() === hash ? "text-orange-500 bg-orange-100 border-r-2 border-orange-500" : " hover:bg-white hover:text-gray-800 text-sm text-gray-400 "}`}>
                            {`${e}`}
                        </NavHashLink>
                    )
                }
            </ol>
        </nav>
    )
}

export default Menu
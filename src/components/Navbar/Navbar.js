function NavBar({ children }) {
    return (
        <nav className="drop-shadow-md sticky top-0 bg-white z-20">
            <div className="flex h-[64px] items-center justify-between mx-4 max-w-4xl md:m-auto">
                {children}
            </div>
        </nav>
    )
}

function Brand({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

function Items({children}) {
    return (
        <div className="flex gap-4 items-center">
            {children}
        </div>
    )
}

NavBar.Brand = Brand
NavBar.Items = Items

export default NavBar
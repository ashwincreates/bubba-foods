function Header({title, children, ...props}) {
    return (
        <header className="flex justify-between" {...props}>
            <Left>
                <h1 className="py-5">{title}</h1>
            </Left>
            {children}
        </header>
    )
}

function Left({children}) {
    return (
        <div className="flex">
            {children}
        </div>
    )
}

function Right({children}) {
    return (
        <div className="flex">
            {children}
        </div>
    )
}

Header.Right = Right

export default Header
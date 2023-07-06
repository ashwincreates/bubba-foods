import { ReactNode } from "react"

function Banner({ children, src, width='300px'}: {children: ReactNode, src: any, width?: string}) {
    return (
        <div className="justify-content-center relative">
            <div className="relative">
                <img className={`h-[${width}] w-full object-cover`} src={src}></img>
                <div className="bg-gradient-to-t from-black to-gray-500/0 absolute w-full h-full top-0" />
                {children}
            </div>
        </div>
    )
}

export default Banner

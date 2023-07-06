import { createContext, ReactNode, useContext } from "react";

interface BrandContext {
    id: string
}
export const BrandContext = createContext({id: ''});

export function BrandProvider({ children, id }: { children: ReactNode, id: string }) {
    return (
        <BrandContext.Provider value={{ id: id }}>
            {children}
        </BrandContext.Provider>
    )
}

export function useBrand() {
    return useContext(BrandContext)
}

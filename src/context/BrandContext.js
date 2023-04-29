import { createContext } from "react";

export const BrandContext = createContext(null);

export function BrandProvider({ children, id }) {

    return (
        <BrandContext.Provider value={{id: id}}>
            {children}
        </BrandContext.Provider>
    )
}
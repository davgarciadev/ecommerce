/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// 1. Crear el Contexto
export const FiltersContext = createContext();

// 2. Creamos el Provider, para proveer el contexto
export function FiltersProvider ({children}){
    console.log("Render [Context]")
    const [filters, setFilters] = useState({category:"all",minPrice:0})

    return (
        <FiltersContext.Provider value={
          { filters,
           setFilters}
        }>
            {children}
        </FiltersContext.Provider>
    )
}
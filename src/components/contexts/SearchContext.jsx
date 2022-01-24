import React, { useState } from 'react'

const SearchContext = React.createContext()



const SearchProvider = ({ children }) => {

    const [search, setSearch] = useState(``)

    const data = {search, setSearch}


    return (
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    )
}

export {SearchProvider}
export default SearchContext
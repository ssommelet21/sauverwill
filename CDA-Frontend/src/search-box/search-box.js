import React from 'react'

import './search-box.css'

const SearchBox = props => (
    <input 
        className="search-box"
        type="search"
        placeholder={props.message}
        onChange={props.onSearch}
    />
)

export default SearchBox
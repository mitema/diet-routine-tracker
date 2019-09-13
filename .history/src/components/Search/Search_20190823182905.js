import React, from 'react'
import './Search.css'

const Search = (props) => {
    
    return (
        div>
          <input
            type='text'
            name='text'
            placeholder='Search...'
            value={text}
            onChange={onChange}
        />
    )
}
export default Search

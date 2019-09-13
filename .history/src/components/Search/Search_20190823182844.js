import React, from 'react'
import './Search.css'

const Search = (props) => {
    
    return (
        div>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search...'
            value={text}
            onChange={onChange}
          />
        </form>
    )
}
export default Search

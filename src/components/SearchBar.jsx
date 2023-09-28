import React from 'react'
import './SearchBar.css'

function SearchBar({onSearch}) {
    const handleSearch = (e) => {
        onSearch(e.target.value)
    }
    const handleScrolling = (e) =>{
        window.scrollTo({
            top: 350,
            behavior: 'smooth', // This provides smooth scrolling
          });
    }
    return (
        <div className=''>
                <div><h2 style={{textAlign:'center'}} className='search-title'>Job Search</h2></div>
                <div className='search-style-input search-align-style'>
                    <i className="fa-solid fa-magnifying-glass" style={{color:"000000"}}></i>
                    <input onFocus={handleScrolling} type="text"
                        placeholder='Seach for jobs...'
                        onChange={handleSearch}
                    />
                </div>
         
        </div>
    )
}

export default SearchBar
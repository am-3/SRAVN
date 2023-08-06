import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/SearchBox.css'
export default function SearchBox() {
    return (
        <div className='search'>
            <div className="icon">
                <FaSearch/>
            </div>
            <input type="text" className='search-box' placeholder='Enter your keywords...'/>
            <button>
                <FaArrowRight size={20}/>
            </button>
        </div>
    )
}

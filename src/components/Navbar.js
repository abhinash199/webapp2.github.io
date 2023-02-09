import React, { useState } from 'react'
import icon from "./styles/search_icon.svg";

import { useGlobalContext } from '../context';

const Navbar = () => {

  const { query, setQuery} = useGlobalContext();


  return (
    <div className='container'>
      <nav>

        <h1 className='nav-text'>TV MAZE SHOW</h1>

        <div className='searchbox'>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <img src={icon} />
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </nav>

    </div>
  )
}

export default Navbar


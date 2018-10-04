import React from 'react';

import './Navbar.css';

// Navbar component
const Navbar = () => {
    return (
        <div className='bg-blue pa3 navbar'>
          <p>Show me courses for</p>
          <select>
            <option value="All professions">All professions</option>
          </select>
          <p>in</p>
          <select>
            <option value="All states">All states</option>
          </select>
          <p>classificaied as</p>
          <p>sorted by</p>
          <select>
            <option value="Popularity">Popularity</option>
          </select>
        </div>
    );
}

export default Navbar;
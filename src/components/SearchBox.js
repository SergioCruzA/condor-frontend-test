import React from 'react';

// SearchBox component
const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2 tl ma3'>
            <input
                className='pa2 ba b--green bg-white-30 br4'
                type='search'
                placeholder='search courses'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
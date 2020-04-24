import React from 'react';
import './SearchBar.scss';

const SearchBar = props => {
    return (
        <div className="SearchBar">
            <input className="SearchBar__Input" type="search" placeholder={props.searchType} onChange={e => props.onInputChange(e)} />
        </div>
    );
}

export default SearchBar;

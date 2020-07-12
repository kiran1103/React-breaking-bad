import React from 'react';
import classes from './Search.module.css';

const Search = ({ onSearch }) => {
    return (
        <div className={classes.container}>
            <input
                onChange={(e) => onSearch(e.target.value)}
                className={classes.searchInput}
                type="text" placeholder="Search"
            />
        </div>
    )
}

export default Search;
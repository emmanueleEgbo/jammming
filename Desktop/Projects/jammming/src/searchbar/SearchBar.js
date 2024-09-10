import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar(){
   return(
      <div>
         <label htmlFor='search'></label>
         <input 
           type="text" 
           id='search' 
           placeholder="Search for a Song"
           className={styles.searchBarStyle}
         />
         <button className={styles.searchBtn}>Search</button>
      </div>
   );
}

export default SearchBar;
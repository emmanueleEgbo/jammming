import React, { useState, useCallback } from 'react';
import styles from './SearchBar.module.css';
//import { search } from '../spotify/Spotify';

function SearchBar(props){
   const [term, setTerm] = useState('');

   const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

   const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

   return(
      <div>
         <label htmlFor='search'></label>
         <input 
           type="text" 
           id='search' 
           placeholder="SEARCH SONGS"
           className={styles.searchBarStyle}
           onChange={handleTermChange}
           value={term}
         />
         <button className={styles.searchBtn} onClick={search}>
           SEARCH
         </button>
      </div>
   );
}

export default SearchBar;
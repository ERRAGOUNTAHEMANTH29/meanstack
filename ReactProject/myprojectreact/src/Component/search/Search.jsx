import React from 'react';
import "../search/search.css"
export default function Searchbar(){
    return(
        <main>
        <div class="search-wrapper">
<div class="search-box">
<div class="search-card">
  <input class="search-input" type="text" placeholder="Job Title or Keywords"></input>
  <button class="search-buttons">Search</button>
</div>
</div>
</div>
</main>
    )
}
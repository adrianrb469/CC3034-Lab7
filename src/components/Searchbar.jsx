import React from 'react'
import './Searchbar.css'

function Searchbar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search the web without being tracked" />
      <button type="button" aria-label="search" />
    </div>
  )
}

export default Searchbar

import React from 'react'
import SearchBar from './SearchBar'

function SearchItems() {
 const items = [
 "Blender",
 "Browser",
 "cross-platform",
 "HoloLens",
 "Microsoft",
 "Mixed Reality",
 "modelling",
 "MR nodejs",
 "streamsocket",
 "unity",
 "unity3D",
  "unreal engine",
 "VR",
 "websockets"]
  return (
    <div className='search-items'>
     <h2>Search for 3D modeling engines:</h2>
     <SearchBar items={items}/>
    </div>
  )
}

export default SearchItems
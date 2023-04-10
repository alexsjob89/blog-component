import React,{useState} from 'react'

function SearchBar({items}) {
 const [searchQuery, setSearchQuery] = useState("")

 const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <div className='searchBar'>
    <div className="input-search">
     <input
      type="text"
      placeholder='Search...'
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)} />
      <button type="submit" onClick={e => setSearchQuery(e.target.value)} className="btn">Search</button>
      </div>
      <ul className='search-parent-list'>
       {filteredItems.map((item, index) => (
        <li className='search-list' key={index}>{item}</li>
       ))}
      </ul>

    </div>
  )
}

export default SearchBar
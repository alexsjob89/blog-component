import React,{useState} from 'react'

function SearchBar({items}) {
 const [searchQuery, setSearchQuery] = useState("")

 const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <div className='searchBar'>
     <input
      type="text"
      placeholder='Search...'
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)} />
      <ul>
       {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
       ))}
      </ul>
    </div>
  )
}

export default SearchBar
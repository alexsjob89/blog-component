import React,{useState} from 'react';

function CreateTags() {
 const [tags, setTags] = useState([])

const handleAddTag = () => {
  const newTag = prompt("enter a new tag")
  if (newTag) {
   setTags([...tags, newTag]);
  }
}

const handleRemoveTag = (tagToRemove) => {
  const updateTags = tags.filter((tag) => tag !== tagToRemove);
  setTags(updateTags)
}

  return (
    <div>
    <div className='remove-tags'>
     {tags.map((tag) => (
      <span key={tag} onClick={() => handleRemoveTag(tag)}>
      {tag} &times;
      </span>
     ))}
     <h1></h1>
    </div>
    <button onClick={handleAddTag}>Add tag</button>
    </div>
  )
}

export default CreateTags
import React,{useState} from 'react';
import {FaTimes} from "react-icons/fa";

function CreateTags() {
 const [tags, setTags] = useState(["VR", "3D Modeling", "playStation 5"])

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
    <div className='CreateTags'>
    <h3 className='tags'>Tags</h3>
    <div className='remove-tags'>
     {tags.map((tag) => (
      <span key={tag} onClick={() => handleRemoveTag(tag)} className="add-tags">
      {tag} <FaTimes style={{color: "red", fontSize: "15px", marginLeft: "5px"}}/>
      </span>
     ))}

    </div>
    <button className='add-btn' onClick={handleAddTag}>Add tag</button>
    </div>
  )
}

export default CreateTags
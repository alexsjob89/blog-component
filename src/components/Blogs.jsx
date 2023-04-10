
import React,{useState} from 'react';

const posts = [
  {
    id: 1,
    title: "Azure Speech Studio for Mixed Reality",
    body: "This is the body of Post 1",
  },
  {
    id: 2,
    title: "HoloLens 2 Unreal Project Template",
    body: "This is the body of Post 2",
  },
  {
    id: 3,
    title: "Simplygon in Azure",
    body: "This is the body of Post 3",
  },
  {
    id: 4,
    title: "Blender in Azure",
    body: "This is the body of Post 3",
  },
  {
    id: 5,
    title: "AAD Login on HoloLens 2",
    body: "This is the body of Post 3",
  },
];

function Blogs() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <div className='blogs'>
      <h1 style={{marginLeft: "12px"}}>Recent Posts</h1>
      {selectedPost ? (
        <div>
          <h2 style={{marginLeft: "12px"}}>{selectedPost.title}</h2>
          <p style={{marginLeft: "12px"}}>{selectedPost.body}</p>
          <button className='back-to' onClick={handleBackClick}>Back to Posts</button>
        </div>
      ) : (
        <ul className='blog-parent-list'>
          {posts.map((post) => (
            <li className='post-list' key={post.id} onClick={() => handlePostClick(post)}>
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



export default Blogs

import React,{useState} from 'react';

const posts = [
  {
    id: 1,
    title: "Post 1",
    body: "This is the body of Post 1",
  },
  {
    id: 2,
    title: "Post 2",
    body: "This is the body of Post 2",
  },
  {
    id: 3,
    title: "Post 3",
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
    <div>
      <h1>Recent Posts</h1>
      {selectedPost ? (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
          <button onClick={handleBackClick}>Back to Posts</button>
        </div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} onClick={() => handlePostClick(post)}>
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



export default Blogs
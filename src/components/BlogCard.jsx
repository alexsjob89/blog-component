import React from 'react';

const blogs =  [
 {
   id: 1,
   title: "React JS Tutorial",
   content: "Learn React JS in 10 easy steps",
   tags: ["react", "tutorial"],
   link: "https://www.example.com/react-tutorial",
 },
 {
   id: 2,
   title: "Node.js for Beginners",
   content: "Get started with Node.js in just a few hours",
   tags: ["node", "beginners"],
   link: "https://www.example.com/node-beginners",
 },
 {
   id: 3,
   title: "Web Design Trends 2021",
   content: "Stay up-to-date with the latest web design trends",
   tags: ["web design", "trends"],
   link: "https://www.example.com/web-design-trends-2021",
 },
];

const BlogCard = ({blog}) => {
 return (
  <div className='blog-card'>
   <h2>{blog.title}</h2>
   <p>{blog.content}</p>
   <div className="tags">
    {blog.tags.map((tag) => (
     <span
      className='tag'
      key={tag}
     >{tag}</span>
    ))}
   </div>
   <a href={blog.link} target="_blank" rel='noreferrer'>
    Read More
   </a>
  </div>
 );
}

export default BlogCard;

import React, { useState } from 'react';
import Header from '../Home/Header';
import "./Blog.css";
import Footer from '../Home/Footer';

const BlogPage = () => {
  const blogData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It makes it painless to create interactive UIs."
    },
    {
      id: 2,
      title: "Why use React?",
      content:
        "React allows developers to build large web applications that can update and render efficiently in response to data changes."
    },
    {
      id: 3,
      title: "React vs Angular",
      content:
        "React is a library focused on UI, while Angular is a full-fledged framework. React is more flexible and easier to learn."
    }
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleBlog = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
    <div id="totalr3">
    <div id="ttq">
    <Header/>
    </div>

    <div id="rrew" className="p-6 max-w-3xl mx-auto">
      <h1 id="bloger"className="text-3xl font-bold mb-6 text-center">Blogs</h1>
      {blogData.map((blog) => (
        <div id="uut" key={blog.id} className="mb-4 border rounded shadow-sm">
          <button
            className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold"
            onClick={() => toggleBlog(blog.id)}
          >
            {blog.title}
          </button>
          {expandedId === blog.id && (
            <div className="p-4 text-gray-700 bg-white border-t">
              {blog.content}
            </div>
          )}
        </div>
      ))}
    </div>

    </div>
  <Footer/>
    </>
  );
};

export default BlogPage;

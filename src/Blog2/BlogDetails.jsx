import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header3 from '../Home/Header3';
import Footer2 from '../Home/Footer2';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://cbackend-lilac.vercel.app/api/blogs/fblogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Error loading blog:", err);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <Header3 />
      <div id="paddernews" className="container" style={{ padding: "2rem" }}>
        <h2>{blog.title}</h2>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginBottom: "1rem" }}
        />
        <p>{blog.description}</p>
      </div>
      <Footer2 />
    </>
  );
};

export default BlogDetails;

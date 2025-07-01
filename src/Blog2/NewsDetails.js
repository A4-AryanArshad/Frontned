import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import Header3 from '../Home/Header3';
import Footer2 from '../Home/Footer2';

const NewsDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://cbackend-lilac.vercel.app/api/news/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error loading post:", err);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <>
<Header3/>
      <div id="paddernews"className="container" style={{ padding: "2rem" }}>
        <h2>{post.title}</h2>
        <img src={post.imageUrl} alt={post.title} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
        <p style={{ marginTop: "1rem" }}>{post.description}</p>
      </div>
<Footer2/>
    </>
  );
};

export default NewsDetails;

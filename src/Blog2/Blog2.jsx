import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './assets/css/style.css';
import RecentPosts from './RecentPosts';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const Blog2 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('https://cbackend-lilac.vercel.app/api/news');
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  // Helper to truncate description
  const truncate = (text, wordLimit) => {
    return text.split(" ").slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <>
      <Header />
      <div id="wwq">
        <div className="subscribe-container">
          <form onSubmit={(e) => e.preventDefault()} className="subscribe-form">
            <input
              type="email"
              placeholder="Add a subscribe to our newsletter"
              required
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>

      <section id="tttt" className="section featured" aria-label="featured post">
        <div className="container">
          <h2 className="h2 section-title">
            Get started with our <strong className="strong">News</strong>
          </h2>

          <ul className="has-scrollbar">
            {posts.map((post, index) => (
              <li key={index} className="scrollbar-item">
                <div className="blog-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 500, "--height": 600 }}
                  >
                    <img
                      src={post.imageUrl}
                      width="500"
                      height="600"
                      loading="lazy"
                      alt={post.title}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <ul className="card-meta-list">
                      {post.tags.map((tag, i) => (
                        <li key={i}>
                          <span className="card-tag">{tag}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="h4">
                      <Link to={`/news/${post._id}`} className="card-title hover:underline">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="card-text">{truncate(post.description, 35)}</p>
                    <Link to={`/news/${post._id}`} className="read-more">Read More →</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RecentPosts />
      <Footer />
    </>
  );
};

export default Blog2;

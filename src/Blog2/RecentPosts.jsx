import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer2 from '../Home/Footer2';

const RecentPosts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('https://cbackend-lilac.vercel.app/api/blogs');
        setBlogs(res.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const truncate = (text, wordLimit) => {
    return text.split(' ').slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <>
      <section className="section recent" aria-label="recent post">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 section-title">
              See what we’ve <strong className="strong">Blogs</strong>
            </h2>

            <div className="top-author">
              <ul className="avatar-list">
                {/* Optional author avatars */}
              </ul>
            </div>
          </div>

          <ul className="grid-list">
            {blogs.map((post, index) => (
              <li key={index}>
                <div className="blog-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": "550", "--height": "660" }}
                  >
                    <img
                      src={post.imageUrl}
                      width="550"
                      height="660"
                      loading="lazy"
                      alt={post.title}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <ul className="card-meta-list">
                      {post.tags.map((tag, tagIdx) => (
                        <li key={tagIdx}>
                          <span className="card-tag">{tag}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="h4">
                      <Link to={`/blogs/${post._id}`} className="card-title hover:underline">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="card-text">{truncate(post.description, 35)}</p>
                    <Link to={`/blogs/${post._id}`} className="read-more">Read More →</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer2 />
    </>
  );
};

export default RecentPosts;

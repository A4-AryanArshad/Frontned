import React from 'react'
import './assets/css/style.css';
import featuredPosts from './Data/featuredPosts';
import RecentPosts from './RecentPosts';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const Blog2 = () => {
  return (
<>
<Header/>

<div id="wwq">
<div className="subscribe-container">
      <form onSubmit={(e) => e.preventDefault()} className="subscribe-form">
        <input
          type="email"
          placeholder="Add a subscribe to our newsletter"
          required
          className="subscribe-input"
        />
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
    </div>
</div>
<section id="tttt" className="section featured" aria-label="featured post">
      <div className="container">
        
        <h2 className="h2 section-title">
        Get started with our <strong className="strong">News</strong>
          </h2>

        <ul className="has-scrollbar">
          {featuredPosts.map((post, index) => (
            <li key={index} className="scrollbar-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 500, "--height": 600 }}
                >
                  <img
                    src={post.image}
                    width="500"
                    height="600"
                    loading="lazy"
                    alt={post.title}
                    className="img-cover"
                  />

                  <ul className="avatar-list absolute">
                    {post.authors.map((author, i) => (
                      <li key={i} className="avatar-item">
                        <a
                          href="#"
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    {post.tags.map((tag, i) => (
                      <li key={i}>
                        <a href="#" className="card-tag">
                          {tag}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <h3 className="h4">
                    <a href="#" className="card-title hover:underline">
                      {post.title}
                    </a>
                  </h3>

                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <RecentPosts/>
    <Footer/>


</>
  )
}

export default Blog2
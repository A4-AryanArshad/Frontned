import React from "react";

// ✅ Corrected image paths (public folder usage)
const recentPosts = [
    {
      image: "/data/assets/images/recent-1.jpg",
      title: "Creating is a privilege but it’s also a gift",
      description:
        "Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex...",
      tags: ["Lifestyle", "People", "Review"],
      authors: [
        "/data/assets/images/author-3.jpg",
        "/data/assets/images/author-5.jpg",
      ],
    },
    {
      image: "/data/assets/images/recent-2.jpg",
      title: "Being unique is better than being perfect",
      description:
        "Nam in pretium dui. Phasellus dapibus, mi at molestie cursus, neque eros aliquet nisi, non efficitur nisi est nec mi...",
      tags: ["Design", "Product", "Idea"],
      authors: ["/data/assets/images/author-5.jpg"],
    },
    {
      image: "/data/assets/images/recent-3.jpg",
      title: "Now we’re getting somewhere",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra. Donec volutpat rhoncus quam, a feugiat elit gravida eget...",
      tags: ["Idea", "Product", "Review"],
      authors: [
        "/data/assets/images/author-2.jpg",
        "/data/assets/images/author-5.jpg",
        "/data/assets/images/author-1.jpg",
      ],
    },
    {
      image: "/data/assets/images/recent-4.jpg",
      title:
        "The trick to getting more done is to have the freedom to roam around",
      description:
        "Integer nec mi cursus, blandit est et, auctor mauris. Aenean ex metus, faucibus in mattis at, tincidunt eu dolor...",
      tags: ["Lifestyle", "Design"],
      authors: ["/data/assets/images/author-3.jpg"],
    },
    {
      image: "/data/assets/images/recent-5.jpg",
      title: "Every day, in every city and town across the country",
      description:
        "Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo. Vestibulum volutpat velit ac tellus mollis...",
      tags: ["People", "Story", "Lifestyle"],
      authors: [
        "/data/assets/images/author-1.jpg",
        "/data/assets/images/author-6.jpg",
      ],
    },
    {
      image: "/data/assets/images/recent-6.jpg",
      title: "Your voice, your mind, your story, your vision",
      description:
        "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales...",
      tags: ["People", "Review", "Story"],
      authors: ["/data/assets/images/author-6.jpg"],
    },
  ];
  
const RecentPosts = () => {
  return (
<section className="section recent" aria-label="recent post">
  <div className="container">
    <div className="title-wrapper">
      <h2 className="h2 section-title">
        See what we’ve <strong className="strong">Blogs</strong>
      </h2>

      <div className="top-author">
        <ul className="avatar-list">
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} className="avatar-item">
              <a
                href="#"
                className="avatar large img-holder"
                style={{ "--width": "100", "--height": "100" }}
              >
                <img
                  src={`/data/assets/images/author-${i}.jpg`}
                  width="100"
                  height="100"
                  alt="top author"
                  className="img-cover"
                />
              </a>
            </li>
          ))}
        </ul>
        <span className="span">Meet our top authors</span>
      </div>
    </div>

    <ul className="grid-list">
      {recentPosts.map((post, index) => (
        <li key={index}>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
              style={{ "--width": "550", "--height": "660" }}
            >
              <img
                src={post.image}
                width="550"
                height="660"
                loading="lazy"
                alt={post.title}
                className="img-cover"
              />

              <ul className="avatar-list absolute">
                {post.authors.map((author, idx) => (
                  <li key={idx} className="avatar-item">
                    <a
                      href="#"
                      className="avatar img-holder"
                      style={{ "--width": "100", "--height": "100" }}
                    >
                      <img
                        src={author}
                        width="100"
                        height="100"
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
                {post.tags.map((tag, tagIdx) => (
                  <li key={tagIdx}>
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

    <button className="btn">Load more</button>
  </div>
</section>

               
  );
};

export default RecentPosts;

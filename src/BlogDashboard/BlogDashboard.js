import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Home/Header';
import Header2 from '../Home/Header2';
import Footer2 from '../Home/Footer2';
const BlogDashboard = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    tags: '',
    category: '',
    image: null,
  });

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const res = await axios.get('https://cbackend-lilac.vercel.app/api/blogs');
    setNews(res.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = e => {
    setForm(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', form.title);
    data.append('description', form.description);
    data.append('tags', form.tags);
    data.append('category', form.category);
    data.append('image', form.image);

    await axios.post('https://cbackend-lilac.vercel.app/api/blogs/add', data);
    fetchNews();
    setForm({ title: '', description: '', tags: '', category: '', image: null });
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://cbackend-lilac.vercel.app/api/blogs/${id}`);
    fetchNews();
  };

  return (
<>
<Header2/>
    <div id="yytr"className="dashboard">
      <h2 id="hd1">Post Blog</h2>
      <form id="fdn1" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={form.title} required />

        <textarea
  name="description"
  placeholder="Description"
  onChange={handleChange}
  value={form.description}
  required
></textarea>
        <input type="text" name="tags" placeholder="Tags (comma separated)" onChange={handleChange} value={form.tags} />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} value={form.category} />
        <input type="file" name="image" onChange={handleFile} required />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <h3 id="hd1">All Blogs</h3>
      <div className="news-cards">
        {news.map(item => (
          <div key={item._id} className="card">
            <img src={item.imageUrl} alt="news" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div>
              {item.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <small>{item.category}</small>
            <br />
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    <Footer2/>
    </>
  );
};

export default BlogDashboard;

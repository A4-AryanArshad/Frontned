import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Header from '../Home/Header2';
import Header2 from '../Home/Header2';
import Footer2 from '../Home/Footer2';

const Dashboard = () => {
  const [form, setForm] = useState({ title: '', description: '', link: '' });
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');

  const fetchCards = async () => {
    try {
      const res = await fetch('https://cbackend-lilac.vercel.app/card/cards');
      const data = await res.json();
      setCards(data);
    } catch (err) {
      console.error('Failed to fetch cards', err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://cbackend-lilac.vercel.app/card/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert('Card added!');
    setForm({ title: '', description: '', link: '' });
    fetchCards();
  };

  const handleDelete = async (id) => {
    await fetch(`https://cbackend-lilac.vercel.app/card/cards/${id}`, {
      method: 'DELETE'
    });
    fetchCards();
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div id="dashf">
<Header2/>
      <h2 id="dh">Add New Card</h2>
      <form id="formerd" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Heading" value={form.title} onChange={handleChange} required /><br />
        <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} required /><br />
        <input type="text" name="link" placeholder="Website URL" value={form.link} onChange={handleChange} required /><br />
        <button type="submit">Add</button>
      </form>



<h2 id="ttqa">Filter By Name</h2>
      <div id="inputerqad"className="filter-section">
        <input
          type="text"
          placeholder="Filter by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div  className="card-list">
        {filteredCards.map((card) => (
          <div id="cced">
          <div  id="pppu"className="card-item" key={card._id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button onClick={() => handleDelete(card._id)}>Delete</button>
          </div>
          </div>
        ))}
      </div>
    </div>
<Footer2/>

    </>
  );
};

export default Dashboard;
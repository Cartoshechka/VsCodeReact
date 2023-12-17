import React, { useState } from 'react';
import './App.css';

// Komponent ArticleList z obsługą polubień
const ArticleList = (props) => {
  const [likes, setLikes] = useState(new Array(props.articles.length).fill(0));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const articles = props.articles.map((article, index) => (
    <div key={index}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <button onClick={() => handleLike(index)}>Likes {likes[index]}</button>
      <p>Likes: {likes[index]}</p>
    </div>
  ));

  return <div>{articles}</div>;
};

// Komponent główny
const App = () => {
  const articlesData = [
    {
      title: 'Pierwszy artykuł',
      content: 'Treść pierwszego artykułu...',
    },
    {
      title: 'Drugi artykuł',
      content: 'Treść drugiego artykułu...',
    },
    {
        title: 'Trzeci artykuł',
        content: 'Treść trzeciego artykułu...',
    }
    // Tutaj można dodać więcej danych artykułów
  ];

  return (
    <div>
      <h1>Article Like App</h1>
      <ArticleList articles={articlesData} />
    </div>
  );
};

export default App;

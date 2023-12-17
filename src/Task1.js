import React from 'react';

// Komponent Header
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

// Komponent ArticleList
const ArticleList = (props) => {
  const articles = props.articles.map((article, index) => (
    <div key={index}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  ));

  return <div>{articles}</div>;
};

// Komponent Footer
const Footer = (props) => {
  return (
    <div>
      <p>{props.info}</p>
    </div>
  );
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
    // Tutaj można dodać więcej danych artykułów
  ];

  return (
    <div>
      <Header title="Tytuł Strony" />
      <ArticleList articles={articlesData} />
      <Footer info="Dowolne informacje na dole strony." />
    </div>
  );
};

export default App;

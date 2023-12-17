import { useState } from "react";

function Header() {
    return <>
        <h1>Lista artykolow</h1>
    </>;

}


const artykuly = [
    { id: 1, tytul: "Article 1", tresc: "Pryklad1" },
    { id: 2, tytul: "Article 2", tresc: "Pryklad2" },
    { id: 3, tytul: "Article 3", tresc: "Pryklad3" },
    {
        id: 4,
        tytul: "Artykuł 4",
        tresc: "To jest bardzo ważna treść dla artykułu numer 4.",
    },
]

function Article({ id, tytul, tresc }) {
    const [likes, setLikes] = useState(0);
  
    function onButtonClick() {
      setLikes(likes + 1);
    }
  
    return (
      <>
        <h2>{tytul}</h2>
        <p>{tresc}</p>
        <button onClick={onButtonClick}>Polubienia: {likes}</button>
        <p>
          <small>ID artykułu: {id}</small>
        </p>
      </>
    );
  }

function ArticleList({ artykuly }) {
    if (artykuly.length === 0) {
      return <div>Brak artykułów.</div>;
    }
  
    const listaArtykulow = artykuly.map((artykul) => (
      <Article id={artykul.id} tytul={artykul.tytul} tresc={artykul.tresc} />
    ));
  
    return <div>{listaArtykulow}</div>;
  }

function Footer() {
    return <>
    <p>lorem ipsum</p>
    </>
}

function Cwiczenie() {

    return (
        <>
            <Header />
            <ArticleList artykuly={artykuly} />
            <Footer />
        </>
    );

}

export default Cwiczenie;
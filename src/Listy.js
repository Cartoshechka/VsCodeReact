const produkty = [
    {nazwa: 'Salatka', czyOwoc: false , cena: 1.50,id: 1},
    {nazwa: 'Czosnek', czyOwoc: false , cena: 1.00,id: 2},
    {nazwa: 'Jabko', czyOwoc: true , cena: 4.00,id: 3}
];


function Listy(){
    const elementyListy = produkty.map(produkt =>
        <li key={produkt.id} /* Bardzo wazne, zeby key bylo orkeslone */
            style={{
            fontFamily: 'Georgia',
            color: produkt.czyOwoc ? 'magenta' : 'darkgreen'
             }}
        >
          
            {produkt.nazwa} &ndash; {produkt.cena} zl
        </li>
        );

    return(
        <>
        <ul>
            {elementyListy}
        </ul>
        </>
    );
}

export default Listy;
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//nazwy funkcji opisujacyh komponenty
//zaczynamy z duzej litery
function MojPrzycisk(){
  return (
    <> 
      <button>Jestem przyciskiem</button>
    </>
  );
}

function StronaOMnie(){

  return(
    <> 
      <h1>O mnie</h1>
      <p>Hej, to jest moja nowa strona. Tutaj jest <code> tajne haslo dla administratora</code></p>
    </>
  );

}

const uzytkownik = {

  nazwa: "Git Hub",
  awatarUrl: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" ,
  awatarRozmiar: 120

}

function Profil(){
  return (
    <>
      <h1>{uzytkownik.nazwa}</h1>
      <img 
      className='avatar'
        src={uzytkownik.awatarUrl}
        alt={"GitHub"}
        style={{
          width: uzytkownik.awatarRozmiar,
          height: uzytkownik.awatarRozmiar,
          // borderRadius: 300
        }}
      />
    </>


  );
}

let trescDlaAdministratora;
let czyZalogowany = true;
if(czyZalogowany){
  trescDlaAdministratora = <StronaOMnie />
} else{
  trescDlaAdministratora = <p>Musisz sie zalogowac aby zobaczyc haslo</p>
}

//Czwiczenie 1

let CzyPokazywacPolubienie = true;

function OMnie(){
  return(
    <>
    <h1>Danylo Shevchenko</h1>
    <p>Lorem</p>
    </>
  );
}

function LubieTo(){
  return(
    <button>Lubie to!</button>
  );
}


function MojaAplikacja(){
  return(
  <div>
    <OMnie />
    {CzyPokazywacPolubienie ? <LubieTo /> : <></>}
    <Profil />
    <h1>Oto moja aplikacja</h1>
    <MojPrzycisk />
    <MojPrzycisk />
    <MojPrzycisk />
    <MojPrzycisk />
    <br />
    <div>
      <h1>Renderowanie warunkowe - sposob1</h1>
      {trescDlaAdministratora}
    </div>
    <div>
        <h1>Renderowanie warunkowe - sposob2</h1>
        {czyZalogowany ?(
          <StronaOMnie />
        ) : (
          <p>Musisz sie zalogowac aby zobaczyc haslo</p>
        )}
    </div>
    <div>
        <h1>Renderowanie warunkowe - sposob3*</h1>
          {czyZalogowany && <StronaOMnie />}  {/* Korzystanie z operatora logicznego AND - &&*/}

    </div>
    </div>
  );

}

export default MojaAplikacja;

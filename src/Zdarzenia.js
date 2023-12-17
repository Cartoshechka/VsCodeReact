import { useState } from "react";


function Przycisk(){

    const [counter, setCounter] = useState(0);

    function obslugaKlikniencja(){
        alert("klikniento mnie!");
        setCounter(counter + 1)
    }

    return(
    <>
        <button onClick={obslugaKlikniencja}>Kliknij Mnie [{counter} razy kliknieto]</button>
    </> 
    );
}

function Zdarzenia(){

    return(
        <div>
            <Przycisk />
            <br />
            <Przycisk />
        </div>
    );

}

export default Zdarzenia;
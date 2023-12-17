import { useState } from "react";


function Przycisk({counterGeneral, setCounterGeneral}){

    const [counter, setCounter] = useState(0);

    function obslugaKlikniencja(){


        //alert("klikniento mnie!");
        setCounter(counter + 1)
        setCounterGeneral(counterGeneral + 1)
    }

    return(
    <>
        <button onClick={obslugaKlikniencja}>Kliknij Mnie [{counter} razy kliknieto, {counterGeneral} ogolnie]</button>
    </> 
    );
}

function Zdarzenia(){
    const [counterGeneral, setCounterGeneral] = useState(0);
    return(
        <div>
            <Przycisk counterGeneral={counterGeneral} setCounterGeneral={setCounterGeneral} />
            <br />
            <Przycisk counterGeneral={counterGeneral} setCounterGeneral={setCounterGeneral}/>
        </div>
    );

}

export default Zdarzenia;
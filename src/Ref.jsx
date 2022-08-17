import React,{useEffect, useRef, useState} from 'react'

function Ref() {

    // Refs können mit html Elementen verknüpft werden und sie könne genutzt werden um Variablen zu speichern. Eine Änderung eines Refs führt nicht zu einem neuen rendern, der Wert im Ref, bleibt bei einem neuen rendern erhalten

    // Der Ref wird initialisiert
    const myInput = useRef(null)
    const myRef = useRef(null)
    
    // Ein State bei jedem Buchstaben im Input wird der State aktualisiert und die Seite neu gerendert
    const [inputState, setInputState] = useState('')

    // Anwendung für ref: wenn der State aktualisiert wird, wird der ref nach oben gezählt, wichtig Daten im ref werden in der Eigenschaft curretn gespeichert...
    useEffect(() => {
        myRef.current = myRef.current+1
    })

    return (
    <div>
        <h3>Ref Komponente</h3>
        {/* Das input Feld wird mit der Ref verbunden, jetzt kann ich auch mit dem ref auf die Eigenschaften des Input Feldes zugreifen */}
        <input type="text" ref={myInput} onChange={(e)=> setInputState(e.target.value)} />
        
        {/* Hier wird die Ref ausgegeben, die die Anzahl der renderungen speichert  */}
        <button onClick={() => alert(myRef.current)}>Wie oft wurde die Seite bislang gerendert?</button>
        
    </div>
  )
}

export default Ref
import React,{useState, useEffect} from 'react'

function Modal() {
  
    let name = 'Christoph'
    const [zeit, setZeit] = useState('früh')
    const [count, setCount] = useState(0)

    
    // Es gibt 4 Varianten für useEffect (Nebeneffekte), alle useEffect laufen mind. einmal durch, wenn die Komponente geladen wird

    //Dieser uE läuft zudem jedes Mal wenn die Seite neugerendert wird (z.B. wenn sich ein State ändert)
    useEffect(() => {
         console.log('Ich bin der useEffect und ich laufe immer wieder los')
    })


    //Dieser uE läuft nur einmal, wenn die Komponente geladen wird
    useEffect(() => {
        console.log('Ich bin ein useEffect und laufe nur am Anfang')
    }, [])


    // Dieser uE läuft zudem, wenn sich ein bestimmter Zustand geändert hat - hier von count
    useEffect(() => {
        if(count>3){
            alert('Sorry das wars')
        }
        console.log('Ich bin der useEffect und ich laufe nur mit count', count)
    },[count]);

    // Ein return in einem useEffect wird ausgeführt, wenn die Komponente geschlossen wird 
    useEffect(() => {
    return () =>{
        console.log('Ich laufe wenn die Komponente geschlossen wird')
    }
    })


    return (
    <div>
        {/* <h3>Ich bin ein Modal</h3> */}
        <h1>{zeit==='früh' ? "GUTEN MORGEN" : "HALLO"} ich bin eine Überschrift</h1>
        <p>Wie geht es dir {name}</p>
        <button onClick={() => zeit==='früh' ? setZeit('spät') : setZeit('früh')}>Ändere Zeit</button>
        <button onClick={() => setCount(count+1)}>{count}</button>
        
    </div>
  )
}

export default Modal

//rfce --> react functional component export
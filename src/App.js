import { useState } from 'react';
import './App.css';
import Modal from './Modal';
import Ref from './Ref';

function App() {
  
  // 2 Zustände um jeweils das Modal und die Ref Komponente darzustellen oder nicht
  const [showModal, setShowModal] =useState(false)
  const [showRef, setShowRef] = useState(false)
  


  //Hier werden die Zustände verändert 
  function toggleModal(){
    setShowModal(prev => !prev)
  }

  function toggleRef(){
    setShowRef(() => !showRef)
    
  }


  return (
    <div className="App">
          <button onClick={toggleModal}>Show Modal</button>
          <button onClick={toggleRef}>Show Ref Komponente </button>
          {showModal && <Modal /> /* Wenn der Zustand showModal true ist, dann wird die Komponente gerendert */ } 
          {showRef && <Ref />}
    </div>
  );
}

export default App;

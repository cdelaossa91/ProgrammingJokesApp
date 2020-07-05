import React, {useState} from 'react';
import Joke from './Joke';

const Generator = () =>{
   const [generate, setGenerate] = useState(null);
    
    const handleShow = (event) =>{
     setGenerate(true);
    }
    
    return (
         <button className="btn btn-secondary" onClick={handleShow}>Generate</button>
           );
  }

export default Generator;

import React from 'react';
import Generator from './Generator';
import './App.css';


function Wrapper(){
  return (
    <div className="container mx-auto my-4 p-5 bg-dark text-white text-center" id="mainWrapper">
      <h1 className="display-4 mb-4">Programming Jokes Generator</h1>
       <img src={require('../images/lolmeme.png')} alt="meme" width="150px"></img>
       <div className="container my-5">
       <Generator/>
       </div>
      
    </div>
  );

}



export default Wrapper;

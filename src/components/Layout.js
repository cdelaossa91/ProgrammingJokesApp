import React from 'react';

const Layout = (props) =>{
    return(  
    <div className="container mx-auto my-4 p-5 bg-dark text-white text-center" style={{ height: '70vh'}}>
        <h1 className="display-4 mb-4">Programming Jokes Generator</h1>
        <img src={require('../images/lolmeme.png')} alt="meme" width="150px"></img>
            <div className="container my-5">
            {props.children}
            </div>
    </div>
  );
}

export default Layout;

import React from 'react';


const Generator = (props) =>{
    const handleShow = () =>{
        props.generate()
    }

    return (
         <button className="btn btn-secondary">Generate</button>
           );
  }

export default Generator;

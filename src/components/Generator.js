import React from 'react';
import Joke from './Joke';

class Generator extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        show: false
      }
  
    }
  
    handleShow = ()=>{
      this.setState(state=> ({
        show: !state.show,
      }));
    }
    
    render(){
        const {show}= this.state;
        if(!show){
            return (
            <button className="btn btn-secondary" onClick={this.handleShow}>
              Generate
              </button>)
        } else{
          return ( 
          <>
          <button className="btn btn-secondary" onClick={this.handleShow}>
          Generate
          </button>
          <Joke/>
          </>
          );
        } 
    }
  
  }

export default Generator;

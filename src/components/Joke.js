import React from 'react';

const Joke = ({loading, jokes}) => {
      if(loading==null){
        return <div className="container my-5" style={{visibility: 'hidden', paddingTop:50 }}>Click the button to generate a joke</div>;
      }else {
          return(
          <ul className="my-5 list-unstyled lead">
            {jokes.map(joke =>(
              <li key={joke.id}>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
              </li>
           ))}
          </ul>
          )
      }
  }

export default Joke;

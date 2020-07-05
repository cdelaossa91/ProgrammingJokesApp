import React, {useState, useEffect} from 'react';


const Joke = () => {
    const [isLoaded, setLoading] = useState(false);
    const [jokes, setJokes] = useState([]);

  
    useEffect(()=>{
      fetch('https://official-joke-api.appspot.com/jokes/programming/random')
      .then(response=>response.json())
      .then( data => {
        setLoading(true);
        setJokes(data);
        })
      .catch(console.log)
    }, [])
  
      


    
      if(!isLoaded){
          return <div className="container my-5">Loading...</div>;
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
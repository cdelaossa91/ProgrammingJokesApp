import React, {useState} from 'react';
import Layout from './Layout';
import Joke from './Joke';

const App = () =>{
  const [isLoaded, setLoading] = useState(null);
  const [jokes, setJokes] = useState([]);

  const getJoke = async () =>{
   await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
   .then(response=>response.json())
   .then( data => {
     setLoading(true);
     setJokes(data);
     })
     .catch(console.log);
  }

  return (
        <Layout>
        <button className="btn btn-secondary" onClick={getJoke}>Generate</button>
        <Joke loading={isLoaded} jokes={jokes}/>
        </Layout>
  );

}

export default App;

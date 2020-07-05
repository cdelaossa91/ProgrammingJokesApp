import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import Joke from './Joke';
import './App.css';


const App = () =>{
  const [isLoaded, setLoading] = useState(false);
  const [jokes, setJokes] = useState([]);


  useEffect(()=>{
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(response=>response.json())
    .then( data => {
      setLoading(true);
      setJokes(data);
      })
    .catch(console.log);
    setLoading(false);
  }, []);

  return (
        <Layout>
        <Joke loading={isLoaded} jokes={jokes}/>
        </Layout>
  );

}

export default App;


import './App.css';
import Datahere from './Pages/Datahere'
import {useState} from 'react';

function App() {
  
  const [user, setUser ] = useState(null); // initialize user to null 


  
  return (
    <div className="App">
    
      <Datahere />
       
    </div>
  );
}

export default App;

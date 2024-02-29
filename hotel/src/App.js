
import './App.css';
import Datahere from './pages/Datahere'
import {useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import Auth from './pages/Auth';
import Hotels from './pages/Hotels';
import Navbar from './components/navbar';


function App() {
  
  const [user, setUser ] = useState(null); // initialize user to null 


  
  return (
    <main className="App">
    { user ?

<>
<Navbar user= {user} setUser={setUser} />

<Routes>  

    <Route path="/travel/alert" element={<Datahere/>} />
    <Route path="/travel" element ={<Hotels/>} />

    </Routes>   

    </>  
    :
      <Auth setUser={setUser} />
    }
    </main>
  );
}

export default App;

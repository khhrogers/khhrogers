
import './App.css';
import Datahere from './pages/Datahere'
import {useState} from 'react';
import {Routes,Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Hotels from './pages/Hotels';
import Navbar from './components/navbar';
import { getUser } from './components/utilities/user-service';

function App() {
  
  const [user, setUser ] = useState(getUser()); // initialize user to null 


  
  return (
    <main className="App">
    { user ?

<>
<Navbar user= {user} setUser={setUser} />

<Routes>  

    <Route path="/travel/alert" element={<Datahere/>} user={user} setUser={setUser}/>
    <Route path="/travel" element ={<Hotels/>} user={user} setUser={setUser}/>
    <Route path="/*" element={<Navigate to="/travel" />} />
    </Routes>   

    </>  
    :
      <Auth setUser={setUser} />
    }
    </main>
  );
}

export default App;

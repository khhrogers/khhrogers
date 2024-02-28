
import './App.css';
import Datahere from './pages/Datahere'
import {useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import Auth from './pages/Auth';
import Hotels from './pages/Hotels';
import Navbar from './components/navbar';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  
  const [user, setUser ] = useState({}); // initialize user to null 


  
  return (
    <main className="App">
    { user ?

<>
<Navbar />
<SignUpForm/>
<Routes>  

    <Route path="/travel/alert" element={<Datahere/>} />
    <Route path="/travel" element ={<Hotels/>} />

    </Routes>   

    </>  
    :
      <Auth />
    }
    </main>
  );
}

export default App;

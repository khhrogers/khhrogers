
import './App.css';
import {useState} from 'react';
import NewOrderPage from './pages/NewOrder';
import AuthPage from './pages/Auth'
import {Routes, Route} from 'react-router-dom';
import OrderHistoryPage from './pages/OrderHistory';
import NavBar from './components/Nav';
import {getUser} from './utilities/users-service'


export default function  App() {

const [user, setUser] = useState(getUser());
 
    return (
      <main className="App">
        { user ?
           <> <NavBar user={user} />
           
           
           
                 
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>

            </> 
          :
          <AuthPage setUser={setUser} />
        }

      </main>
    );
}



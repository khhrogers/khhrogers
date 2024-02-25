
import './App.css';
import {useState} from 'react';
import NewOrderPage from './pages/NewOrder';
import AuthPage from './pages/Auth'
import {Routes, Route} from 'react-router-dom';
import OrderHistoryPage from './pages/OrderHistory';
import NavBar from './components/Nav';


export default function  App() {

const [user, setUser] = useState();
 
    return (
      <main className="App">
        { user ?
           <> <NavBar />
           
           
           
                 
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>

            </> 
          :
          <AuthPage />
        }

      </main>
    );
}



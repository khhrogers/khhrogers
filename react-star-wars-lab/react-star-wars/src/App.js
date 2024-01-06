import StarShipCard from "./services/StarShipCard";
import { Routes, Route } from 'react-router-dom';
import "./App.css";

export default function App() {

  return (
   <div className="Wars" > 

  <Routes>

  <Route path="/StarShipCard/" element={<StarShipCard />} />


</Routes>


   
   
   
   
</div>
  
  );
}



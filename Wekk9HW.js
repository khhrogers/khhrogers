import Navbar from "./Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Stocks from "./pages/Stocks"

function App() {
  let component 
switch (window.location.pathname) {
  case "/":
    component = <Home />
    break
    case "/about":
      component = <About />
      break
      case "/Stocks":
     component = <Stocks/>
}
   return (
    <> 
   <Navbar/>

   {component}
   
   </>
   )
}

export default App;

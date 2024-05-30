
import './App.css';
import Footer from './Componets/Footer';
import Nav from './Componets/Nav';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './Componets/Signup';


function App() {
  return (

  <div className='App'>

    <BrowserRouter>
    <Nav/>
 <Routes>
  <Route path='/' element={<h1>Product Componet</h1>}/>
  <Route path='/add' element={<h1>Add Product Componet</h1>}/>
  <Route path='/update' element={<h1>update Product Componet</h1>}/>
  <Route path='/logout' element={<h1>logout Componet</h1>}/>
  <Route path='/profile' element={<h1>profile Componet</h1>}/>
  <Route path='/signup' element={<Signup/>}/>
 </Routes>
 <Footer/>
    </BrowserRouter>

  </div>
  );
}

export default App;

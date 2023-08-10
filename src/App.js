import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import ProductList from './Composants/ProductList'
import Addproduct from './Composants/Addproduct';
import Updateproduct from './Composants/Updateproduct';

function App() {
  return (
    <div className="App">
      <h1>TP-Blogs</h1>
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<ProductList/>}/>
       <Route path='/add-product' element={<Addproduct/>}/>
       <Route path='/update-product/:id' element={<Updateproduct/>}/>
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;

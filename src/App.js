import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import { Nav, Navbar } from 'react-bootstrap';
// import NavbarHeader from './components/common/NavbarHeader'
import Users from './components/pages/Users';
import Product from './components/pages/Product';
import User from './components/pages/User';
import Nav from './components/common/Nav';
import FormFields from './components/pages/FormFields';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
          <Nav />
          {/* <NavbarHeader /> */}
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users" element={<Users />} />
            <Route path="/User/:id" element={<User />} />
            <Route path="/product" element={<Product />} />
            <Route path="/formfields" element={<FormFields />} />            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';

import { Header } from './components/Home'
import About from './components/About'
import {Nav} from './components/Navbar'
import Booking from './components/Booking';
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Openingsoon from './pop_over/Openingsoon'
import Contact from './components/Contact'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Hotels from './components/hotels_page/Hotels';
function App() {
  return (
    <div className="">
<Router>
    <Nav/>
  <Routes>
    <Route path="/" element={<Header/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/hotels" element={<Hotels/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<h1 className="text-6xl text-center my-[10%]">404 page not found</h1>}/>
    {/* <Route path="/op" element={<Openingsoon/>}/> */}
  </Routes>
  <Footer/>
</Router>

    </div>
  );
}

export default App;

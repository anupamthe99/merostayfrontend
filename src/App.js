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

import {useState,createContext} from 'react';
import Hotel_detail from './components/hotels_page/Hotel_detail';

export const AppContext=createContext();

function App() {

  const [dest,setDest]=useState("HOTELS")

  return (
    <div className="">
      <AppContext.Provider value={{dest,setDest}}>
<Router>
    <Nav/>
  <Routes>
    <Route path="/" element={<Header/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/hotels" element={<Hotels/>}/>
    <Route path="/hotels/:slug" element={<Hotel_detail/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<h1 className="text-6xl text-center my-[10%]">404 page not found</h1>}/>
    {/* <Route path="/op" element={<Openingsoon/>}/> */}
  </Routes>
  <Footer/>
</Router>
</AppContext.Provider>

    </div>
  );
}

export default App;

import './App.css';
import { Nav } from './components/Navbar'
import { Header } from './components/Home'
import Booking from './components/Booking';
import Destination from './components/Destination';
import About from './components/About'
import Footer from './components/Footer'
function App() {
  return (
    <div className="">
      <Nav />
      <Header />
      <Booking />
      <Destination/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

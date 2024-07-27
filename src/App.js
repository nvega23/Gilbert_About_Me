import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Service from './components/services/service';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './App.css'; 

function App() {
  return (
    <div className="appContainer">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

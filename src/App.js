import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import BannerHeader from './components/header/BannerHeader';
import NavMenu from './components/navmenu/NavMenu';

function App() {
  return (
    <HashRouter>
      <div className="App">

       

          <header>
            <BannerHeader/>
          </header>
          
          <NavMenu/>

          <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
          </main>

          <footer>
            foot
          </footer>
        

      </div>
    </HashRouter>
  );
}

export default App;

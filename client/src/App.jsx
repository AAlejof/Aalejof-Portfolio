import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const location = useLocation();
  const { pathname } = location;

  const boolAddComponent =
    pathname === '/' ||
    pathname === '/home';

  return (
    <>
      <div className="App">

        {boolAddComponent && <Navbar />}

        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>

        {boolAddComponent && <Footer />}
      </div>

    </>
  )
}

export default App;

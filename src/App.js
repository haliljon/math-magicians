import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator/*" element={<Calculator />} />
        <Route exact path="/quote/*" element={<Quote />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

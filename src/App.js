import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from "./components/Recipes";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//https://api.edamam.com/search?q=onion&app_id=f96cc223&app_key=e5d23478c3050f4e635905516f338dd1
function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

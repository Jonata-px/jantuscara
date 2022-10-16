
import './static/css/App.css';
import './static/css/index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Routes>
          <Route path="*" element={<Home/>}/>
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;

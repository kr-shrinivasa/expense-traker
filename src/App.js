import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Addform from './pages/addform/Addform';
import Home from './pages/home/Home';
import { Routes, Route  } from "react-router-dom";
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
      <Route exact path="/" element={<Home />} />
   <Route exact path="/add-expense" element={<Addform />} />

      
   <Route path="/login" element={<Login />} /> 
      </Routes>
      <Footer></Footer>
  
    </div>
  );
}

export default App;

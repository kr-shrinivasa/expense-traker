import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home/Home';
import { Routes, Route  } from "react-router-dom";
import Login from './components/login/Login';
import NewExpense from './pages/addexpense/AddExpense';
function App() {


  return (
    <>
    <Header></Header>
    <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="/add-expense" element={<NewExpense />} />

      
   <Route path="/login" element={<Login />} /> 
      </Routes>
      <Footer/>
      </>
    
  );
}

export default App;

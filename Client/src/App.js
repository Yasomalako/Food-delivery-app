import './App.css';
import Navbar from './Components/Features/Header/Header';
// import  LoginForm  from './Components/Features/logIn/LogIn';
// import RegisterForm from './Components/Features/Register/Register';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Features/footer/footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

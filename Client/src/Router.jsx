import { Routes, Route, } from 'react-router-dom'
// import Navbar from './Components/Features/Header/Header'
import LoginForm from './Components/Features/logIn/LogIn'
import RegisterForm from './Components/Features/Register/Register'
import LandingPage from './Components/Pages/LandingPage/LandingPage'
import Products from './Components/Pages/Products/Products'

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path='login' element={<LoginForm />} />
                <Route path='landingPAge' element={<LandingPage />} />
                <Route path='/' element={<RegisterForm />} />
                <Route path='products' element={<Products />} />
            </Routes>
        </div>
    )
}
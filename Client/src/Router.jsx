import { GoogleMap } from '@react-google-maps/api'
import { Routes, Route, } from 'react-router-dom'
import { UsersContext } from './Components/Contextes/users-context'
import LoginForm from './Components/Features/logIn/LogIn'
import Map, { GoogleHomeMap } from './Components/Features/Map/Map'
import RegisterForm from './Components/Features/Register/Register'
import LandingPage from './Components/Pages/LandingPage/LandingPage'
import Orders from './Components/Pages/Orders/Orders'
import Products from './Components/Pages/Products/Products'
import Profile from './Components/Pages/Profile/Profile'

export default function Router() {
    return (
        <div>
         
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='products' element={<Products />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='logIn' element={<LoginForm />} />
                    <Route path='register' element={<RegisterForm />} />
                    <Route path='map' element={<Map />} />
                </Routes>
        
        </div>
    )
}
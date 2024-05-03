import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import Users from './pages/Users'
import AppLayout from './ui/AppLayout'

export default function App(){
  return(
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
      
      <Route element = {<AppLayout/>}>
      <Route  index element = {<Navigate replace to = 'dashboard'/>} />
      <Route exact path = '/dashboard' element = {<Dashboard/>} />
      <Route exact path = '/bookings' element = {<Bookings/>} />
      <Route exact path = '/cabins' element = {<Cabins/>} />
      <Route exact path = '/users' element = {<Users/>} />
      <Route exact path = '/settings' element = {<Settings/>} />
      <Route exact path = '/account' element = {<Account/>} />
      </Route>
      <Route exact path = '/login' element = {<Login/>} />
      <Route exact path = '*' element = {<PageNotFound/>} />
     
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
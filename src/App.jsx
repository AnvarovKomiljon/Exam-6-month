import './App.css'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'
import Client from './pages/Client/Client'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
  })
  return (
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/client' element={<Client/>}/>
  </Routes>
  )
}

export default App




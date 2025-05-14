
import UserLoginPage from './pages/authPages/UserLoginPage.jsx'
import UserRegistrationPage from './pages/authPages/UserRegistrationPage.jsx'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<UserLoginPage/>}/>
        <Route path='/Register' element={<UserRegistrationPage/>}/>
      </Routes>
    </>
  )
}

export default App

// Components
import Footer from './layouts/Footer'

//Pages imports
import EmployeeHome from './pages/home/EmployeeHome'
import AdminHome from './pages/home/AdminHome'
import Login from './pages/login/Login'

// Stylesheet
import './App.css'

// React
import {Routes ,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = {< Login />}></Route>
        <Route path='*' element = {< AdminHome/>}></Route>
        <Route path='/employeeHome/*' element = {< EmployeeHome/>}></Route>
      </Routes>

      <div className='footer'>
          < Footer/>
      </div>
    </>
  )
}

export default App

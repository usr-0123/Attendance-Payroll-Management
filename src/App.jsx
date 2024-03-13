// Components
import Footer from './layouts/Footer'

//Pages imports
import Home from './pages/Home'
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
        {/* <Route path='/login' element = {< Login/>}></Route> */}
        <Route path='/*' element = {< Home/>}></Route>
      </Routes>

      <div className='footer'>
          < Footer/>
      </div>
    </>
  )
}

export default App

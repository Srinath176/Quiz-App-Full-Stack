import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Score from './components/pages/Score'
import Quiz from './components/pages/Quiz'
import Home from './components/home/Home'
import Login from './components/pages/Login'
import SignUp from './components/pages/Signup'
import Logout from './components/pages/Logout'
import CategoryQuiz from './components/pages/CategoryQuiz'
import Premium from './components/premium/Premium'
import PaymentConfirmation from './components/pages/PaymentConfirmation'
import { useState } from 'react'



function App() {



  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/score' element={<Score />}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route> 
          <Route path='/login' element={<Login/>}></Route> 
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='/categoryQuiz' element={<CategoryQuiz/>}></Route>
          <Route path='/premium' element={<Premium/>}></Route>
          <Route path='/checkout' element={<PaymentConfirmation/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

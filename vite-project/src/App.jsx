
import './App.css'
import Weather from './weather-app'
import { Route,Routes } from 'react-router-dom'
import Home from './food/home'
import Fav from './food/fav'
import Details from './food/details'
import Nav from './food/nav'


function App() {

  

  return (
    <>
    {/* <Weather/> */}
    <Nav />
<Routes>
  <Route path='/' element={<Home  />}></Route>
  <Route path='/fav' element={<Fav/>}></Route>
  <Route path='/details/:id' element={<Details/>}></Route>
</Routes>
    </>
  )
}

export default App

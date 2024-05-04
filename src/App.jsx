import {Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import './styles/style.scss'
import Study from "./pages/Study/Study";
import Work from "./pages/Work/Work";
import NotOne from "./pages/NotOne/NotOne";
import Room from "./pages/Room/Room";
import Parents from "./pages/Parents/Parents";

function App() {

  return (
    <>
        <Routes>

            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='/study' element={<Study/>}/>
                <Route path='/work' element={<Work/>}/>
                <Route path='/notOne' element={<NotOne/>}/>
                <Route path='/room' element={<Room/>}/>
                <Route path='/parents' element={<Parents/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

        </Routes>
    </>
  )
}

export default App

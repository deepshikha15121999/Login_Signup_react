import './App.css'
import Dash from './Dashboard'
import Signup from './Signup'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

export default function App(){
    return(
        <div id='main'>
            <BrowserRouter>
            <Link id='signup' to='/signup'>Signup</Link>
            <Link id='dashboard' to='/dashboard'>Dashboard</Link>
            <Routes>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/dashboard' element={<Dash />}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}


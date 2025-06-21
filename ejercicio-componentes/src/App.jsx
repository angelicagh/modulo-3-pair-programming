
import {Routes, Route, Link, NavLink} from 'react-router'
import Home from './components/Home'
import Overview from './components/Overview'
import Repositories from './components/Repositories'

function App() {
 

  return (
<>
    <nav>  
    <ul>
      <li>
      <NavLink to="/"> Home</NavLink>
        {" | "}
        <NavLink to="/overview"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Overview
        </NavLink>
        {" | "}
        <NavLink to="/repositories"> Repositories </NavLink>
      </li>
    </ul>
  </nav>
 
  <Routes>
    <Route index path="/" element={<Home/>}/>
    <Route path="/overview" element={<Overview/>}/>
    <Route path="/repositories" element={<Repositories/>}/>
    <Route path="*" element={<h2>Error 404. Página no encontrada.</h2>}/>
  </Routes>
</>
) 
}

export default App

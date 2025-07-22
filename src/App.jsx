import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"

import Layout from "./components/layout/Layout"


function App() {

  return (
   <Router>
    <div>
      <li><Link to='/'>Principal</Link></li>
      <li><Link to="/contact">Contacto</Link></li>
       <li><Link to="/company">Empresa</Link></li>
      <li><Link to="/newproject">Novo Projecto</Link></li>
    </div>

    <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/newproject" element={<NewProject/>}/>
        </Route>
    </Routes>
    <p>Footer</p>
   </Router>
  )
}

export default App

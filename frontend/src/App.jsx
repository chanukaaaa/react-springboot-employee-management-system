import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListEmployeeComponent from "./components/ListEmployeeComponent1"
import EmployeeComponent from "./components/EmployeeComponent"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<EmployeeComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App

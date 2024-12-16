import ListEmployeeComponent from './components/ListEmployeeComponent'
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent';



function App() {
  return (
    <>
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path= '/' element={<ListEmployeeComponent />} ></Route>
          {/* http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />} ></Route>
          {/* http://localhost:3000/add-employee */}
          <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>

          {/* http://localhost:3000/edit-employee/1 */}
              <Route path='/edit-employee/:id' element= {<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App;
                                         
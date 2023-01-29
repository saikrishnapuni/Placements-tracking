
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.js'
import Header from './components/Header/Header.js'
import classes from './app.module.css'
import Addrecruiter from './pages/AddRecruiter/Addrecruiters'
import Form from './pages/Addrecruitment/addrecruitment'
import Recruiter from './pages/Recruiter/Recruiter';
import Recruitment from './pages/Recruitment/Recruitement';
import Allrecruiters from './pages/AllRecrutiers/allrecruiters';
import Search from './pages/Search/search';
import Stats from './pages/Stats/Stats';
import Attendance from './pages/Attendance/Attendance'
import Signin from './pages/SignIn/SignIn';
import Studentlogin from './pages/logins/studentlogin';
import Admin from './pages/logins/admin';
import { createContext ,useEffect,useState} from 'react';
import api from './api';
export const AdminContext = createContext();
function App() {
  const [admin, setAdmin] = useState(false)
  async function fetch() {
    let a = localStorage.getItem('log')
    console.log("a == ",a)
    setAdmin(a)
  }
  useEffect(() => {
    fetch()
  },[])
    
  

  

  return <>
    <AdminContext.Provider value={admin}>
    <div className={classes.main_body}>
      <Header />
      <div className={classes.content}>
        <Routes>
          <Route path='/search' element={<Search />} />
          <Route path='/' element={< Dashboard />}></Route>
         <Route path='/addrecruiter' element={<Addrecruiter />}></Route>
          <Route path='/addrecruitment/:id' element={<Form />}></Route>
          <Route path='/recruiter/:id' element={<Recruiter />}></Route>
          <Route path='/recruitment/:id' element={<Recruitment />}></Route>
          <Route path='/allrecruiter' element={<Allrecruiters />}></Route>
          <Route path='/stats' element={<Stats />}></Route>
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/studentlogin" element={<Studentlogin />} />
          <Route path="/adminlogin" element={<Admin />} />
          
        </Routes>
      </div>

      </div>
      </AdminContext.Provider>

    </>;
}

export default App;

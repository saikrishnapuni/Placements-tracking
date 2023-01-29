import classes from './Header.module.css'
import logo1 from './logo1.png'
import { Link } from 'react-router-dom'
import { BiSearch } from "react-icons/bi"
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../../api";
import App, { AdminContext } from '../../App'
import Admin from '../../pages/logins/admin'
import React, { useContext } from "react";
const Header = () => {
    async function logout() {
        localStorage.removeItem('log')
        window.location.reload(false)
        
    }
    const [name, setName] = useState('')
    const uid = false
    const admin = useContext(AdminContext)
    const navigate = useNavigate()
    const search = (e) => {
        e.preventDefault()
        navigate(`/search?q=${name}`)
    }
    return (
        
            <div className={classes.header}>
                <div style={{ margin: "1rem 0rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <img src={logo1} className={classes.logo} />
                    <Link to="/" className={classes.link}>Dashboard</Link>
                <Link to="/stats" className={classes.link}>Stats</Link>
                
                {admin && <Link to="/addrecruiter" className={classes.link} >Add Recruiter</Link>}
                <Link to="/allrecruiter" className={classes.link}>All Recruiters</Link>
                {admin?<Link to="/" onClick={logout} className={classes.link}>Logout</Link>:<Link to =  '/adminlogin'className={classes.link}>Admin</Link>}
                    {/* <Link to="/attendance" className={classes.link}>Attendance</Link> */}
                    {admin &&<form className={classes.search_div} onSubmit={search}>

                        <BiSearch className={classes.icon} />
                        <input type="text" className={classes.search} placeholder="Search" onChange={(e) => setName(e.target.value)} value={name} />
                </form>}
                
                    
                </div>

            </div>
        
    )
}

            export default Header
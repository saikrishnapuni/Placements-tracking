import classes from "./admin.module.css"
import { useState, useEffect ,useContext} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import FlashMessage from 'react-flash-message'
import api from "../../api"
import App, { AdminContext } from '../../App'
function Admin() {
    const [uname, setUname] = useState('')
    let admin = useContext(AdminContext)
    const [pass, setPassword] = useState('')
    const [inserting, setInserting] = useState(false)
    const navigate = useNavigate()
    const checkstudent = async (e) => {
        e.preventDefault()
        try {
            console.log(uname)
            console.log(pass)
            const res = await api.post('/adminlogin', {
                uname,
                pass
            })
            console.log(res.data)
            if (res.data == true) {
                localStorage.setItem('log',true)
                navigate('/')
                window.location.reload(false)
            }
            else {
                
                
                navigate('/adminlogin')

            }

        }
        catch(err) {
            console.log(err)
        }

    }
    return (
        <div className={classes.thisbody}>
            <h1 style={{ fontSize: "24px" }}>Admin login</h1>
            <div className={classes.mainbody}>
                <form className={classes.form} onSubmit={checkstudent}>
                    <div className={classes.control}>
                        <input
                            className={classes.input}
                            name="Username"
                            type="text"
                            placeholder=" "
                            required
                            onChange={(e)=>setUname(e.target.value)}
                        />
                        <span>Name</span>
                    </div>
                    <div className={classes.control}>
                        <input
                            className={classes.input}
                            name="password"
                            type="password"
                            placeholder=" "
                            required
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <span>Password</span>
                    </div>
                    <button className={classes.button}>
                        {inserting ?
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <Spinner size={12} />
                            </div>
                            :
                            "Submit"
                        }
                    </button>
                </form>
            </div>
            </div>
    )
}
export default Admin
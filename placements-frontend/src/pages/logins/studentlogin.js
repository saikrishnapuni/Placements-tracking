import classes from "./studentlogin.module.css"
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import api from "../../api"
function Studentlogin() {
    const [uname, setUname] = useState('')
    const [pass, setPassword] = useState('')
    const [inserting, setInserting] = useState(false)
    const navigate = useNavigate()
    const checkstudent = async (e) => {
        e.preventDefault()
        try {
            console.log(uname)
            console.log(pass)
            const res = api.post(`/studentlogin/${uname}`, {
                uname,
                pass
            })
            console.log(res)
            // if (res.data.status == true) {
            //     console.log(res.data.id)
            //     navigate(`/dashboard/${res.id}`)
            // }

        }
        catch(err) {
            console.log(err)
        }

    }
    return (
        <div className={classes.thisbody}>
            <h1 style={{ fontSize: "24px" }}>Student login</h1>
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
                            "Add"
                        }
                    </button>
                </form>
            </div>
            </div>
    )
}
export default Studentlogin
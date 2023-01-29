import React from "react";
import classes from './Signin.module.css'
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const Signin = () => {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [submitting,setSubmitting]=React.useState(false)
    
    const submit = () => {
        
    }


    return <div className={classes.thisbody}>
        <form className={classes.form} onSubmit={submit}>
        <div className={classes.control}>
                            <input
                                className={classes.input}
                                type="text"
                                placeholder=" "
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <span>Username</span>
            </div>
            
            <div className={classes.control}>
                            <input
                                className={classes.input}
                                type="text"
                                placeholder=" "
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span>Password</span>
            </div>
            <button className={classes.button} type="submit" >
                            {submitting ?
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    <Spinner size={12} />
                                </div>
                                :
                                "Signin"
                            }
                        </button>
        </form>
    </div>
    
}

export default Signin
import api from "../../api"
import React, { useEffect,useContext } from 'react'
import { Chart, Filler, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Line } from "react-chartjs-2";
import classes from './Dashboard.module.css'
import { Link } from 'react-router-dom'
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { AdminContext } from "../../App";
Chart.register(LineController, Filler, LineElement, PointElement, LinearScale, Title, CategoryScale);

const Dashboard = () => {
    const [res, setResult] = React.useState(null)
    
    const a = useContext(AdminContext)
    console.log(a)
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    async function fetch() {
        const res = await api.get("/")
        setResult(res)
    }
    useEffect(() => {
        fetch();
    }, [])
    if (!res) {
        return <div style={{ display: "flex", minHeight: "100vh", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Spinner size={"20px"} color="#407FEE" />

        </div>
    }
    return <div style={{ width: "100%",marginBottom:'10rem' }}>
        <h1 style={{ fontSize: "24px" }}>Dashboard</h1>
        <div className={classes.top_layer}>
            <div className={classes.single_box}>
                <h3 style={{ marginTop: '0px', marginBottom: "0rem" }}>{res.data.avg}L</h3>
                <span>Average package</span>
            </div>
            <div className={classes.single_box} style={{ backgroundColor: "#F4B944" }}>
                <h3 style={{ marginTop: '0px', marginBottom: "0rem" }}>{res.data.c}</h3>
                <span>Students placed</span>
            </div>
            <div className={classes.single_box}>
                <h3 style={{ marginTop: '0px', marginBottom: "0rem" }}>{res.data.hp}L</h3>
                <span>Highest package</span>
            </div>
        </div>
        <div className={classes.display}>
            <div className={classes.line}>
                <Line data={{
                    labels: res.data.labels,
                    datasets: [
                        {
                            label: "Average salary",
                            data: res.data.data,
                            fill: true,
                            backgroundColor: "rgba(64, 127, 238, 0.15)",
                            borderColor: "#407FEE",
                            tension: 0.25,
                        }]
                }
                }
                    options={{
                        scales: {

                            x: {
                                grid: {
                                    display: false
                                },
                            },
                            y: {
                                grid: {
                                    display: false
                                },
                                beginAtZero: true,
                            }
                        }
                    }}
                />
            </div>
        </div>
        <div className={classes.upcoming_rounds}>
            <h2 style={{ color: "#202124", fontSize: "18px", width: "100%", textAlign: "start" }}>Upcoming rounds</h2>
            {res.data.dataOfUpcomingRounds.map(itr => {
                return <div className={classes.upcoming}>
                    
                    {a ? <Link to={`/recruitment/${itr.recruitment_id}`} className={classes.inner_upcoming}>
                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                            <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <p className={classes.date_date}>{new Date(itr.date).getDate()}</p>
                                <p className={classes.date_my}>{Months[new Date(itr.date).getMonth()]}, {new Date(itr.date).getFullYear()}</p>
                            </div>

                            <div>
                                <p>{itr.name} - round-{itr.round}</p>
                            </div>

                        </div>

                        <div>
                            {/* {itr.calc} */}
                            {itr.calc === 0 && <h3 className={classes.days_to_go} style={{ color: "#F1BA3A" }}>Today</h3>}
                            {itr.calc === 1 && <p className={classes.days_to_go}>{itr.calc} day to go</p>}
                            {itr.calc > 1 && <p className={classes.days_to_go}>{itr.calc} days to go</p>}
                        </div>
                    </Link> : <div><div style={{ display: 'flex', flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                            <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <p className={classes.date_date}>{new Date(itr.date).getDate()}</p>
                                <p className={classes.date_my}>{Months[new Date(itr.date).getMonth()]}, {new Date(itr.date).getFullYear()}</p>
                            </div>

                            <div>
                                <p>{itr.name} - round-{itr.round}</p>
                            </div>

                    </div>
                    <div>
                    {/* {itr.calc} */}
                    {itr.calc === 0 && <h3 className={classes.days_to_go} style={{ color: "#F1BA3A" }}>Today</h3>}
                    {itr.calc === 1 && <p className={classes.days_to_go}>{itr.calc} day to go</p>}
                    {itr.calc > 1 && <p className={classes.days_to_go}>{itr.calc} days to go</p>}
                </div></div>} 
                        
                </div>


            })}
        </div>
        <div>

            <h2 style={{ color: "#202124", fontSize: "18px", width: "100%", textAlign: "start" }}>Stats</h2>
            <table className={classes.table}>
            <div className={classes.div_stats}>
            <tr>
                        
                    
                        <th>Comapany name</th>
                    
                    
                        <th style={{paddingRight:"50px"}}>package</th>
                    

                    
                        <th style={{width:"30px"}}>it</th>
                        <th style={{width:"30px"}}>cse</th>
                        <th style={{width:"30px"}}>mech</th>
                        <th style={{width:"30px"}}>civil</th>
                        <th style={{width:"30px"}}>eee</th>
                        <th style={{width:"30px"}}>ece</th>
                        <th style={{width:"30px"}}>chem</th>
                    
                    
                        <th style={{paddingLeft:"50px"}}>no of students </th>
                            
                            
                   
                    </tr>
                
                    {res.data.compname.map(m => {
                    
                    return <div className={classes.display3}>
                        <tr>
                            <td>{m}</td>
                        
                        
                            <td style={{paddingRight:"55px"}}>
                                {res.data.sum2[m][1]}Lpa
                            </td>
                            

                        

                        
                            <td style={{width:"30px"}}>{res.data.comp[m]['it']}   </td>

                            <td style={{width:"30px"}}>{res.data.comp[m]['cse']} </td>
                            <td style={{width:"30px"}}>{res.data.comp[m]['mech']} </td>
                            <td style={{width:"30px"}}>{res.data.comp[m]['civil']}  </td>
                            <td style={{width:"30px"}} >{res.data.comp[m]['eee']}  </td>
                            <td style={{width:"30px"}}>{res.data.comp[m]['ece']}  </td>
                            <td style={{width:"30px"}}>{res.data.comp[m]['chem']}  </td>
                        
                        
                        <td style={{paddingLeft:"70px"}}>
                                {res.data.sum2[m][0]}
                            </td>
                        
                        </tr>
                    </div>
                    
                })}
                        


                </div>
                </table>
        </div>
    </div >
}

export default Dashboard



{/* <div id="upcoming rounds">
            {
            res.data.dataOfUpcomingRounds.map(itr=>{
                return <div className={itr._id}>
                    <p>{itr.recruitment_id}</p>
                    </div>
            })
            }
        </div> */}
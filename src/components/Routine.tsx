import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

type RoutineProps = {
    name: string;
    pid: number;
    routine: string;
    description: string;
}

const stopStyle = {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    padding: "5px",
    fontWeight: "bold",
    width: "70px",
    cursor: "pointer",
    transition: "background-color .8s"
}

const startStyle = {
    backgroundColor: "green",
    color: "#fff",
    border: "none",
    padding: "5px",
    fontWeight: "bold",
    width: "70px",
    cursor: "pointer",
    transition: "background-color .8s"
}

function Routine(props: RoutineProps) {

    const [button, setButton] = useState<any>();

    async function stop( ) {
        const req = await api.get(`/stop/${props.routine}`);

        if(req.data.success == true) {
            setButton(<button onClick={start} style={startStyle}>Start</button>)
            console.log(`${props.routine} - ${req.data.message}`);
        } else {
            setButton(<button onClick={start} style={startStyle}>Start</button>)
            console.log(req.data.message);
        };
    };
    
    async function start() {
        const req = await api.get(`/start/${props.routine}`);

        if(req.data.success == true) {
            setButton(<button onClick={stop} style={stopStyle}>Stop</button>)
            console.log(`${props.routine} - ${req.data.message}`);
        } else {
            console.log(req.data.message);
        };
    };

    useEffect(() => {
        if (props.pid > 0) {
            setButton(<button onClick={stop} style={stopStyle}>Stop</button>)
             
        } else {
            setButton(<button onClick={start} style={startStyle}>Start</button>)
        }
        
    }, []);

    return (
        <section
            id='routine-props'
            style={
                {
                    width: "100%",
                    height: "50px",
                    marginTop: "10px"
                }
            }
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <p style={{width: "25%", padding: "0 0 0 15px"}}>{props.name}</p>
                <p style={{width: "65%"}}>{props.description}</p>
                <div style={{width: "10%", display: 'flex', justifyContent: "center"}}>
                    {button}
                </div>
            </div>   
        </section>
    )
}

export {Routine}
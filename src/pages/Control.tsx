import { useEffect, useState } from "react";
import { Redirect } from "../components/Redirect";
import { Routine } from "../components/Routine";
import { Top } from "../components/Top";
import { api } from "../services/api";

type RoutineType = {
    active: number;
    archive: string;
    description: string;
    name: string;
    path: string;
    pid: number;
    routine: string;
}

function Control() {

    const [routines, setRoutines] = useState<RoutineType[]>([]);
    
    useEffect(() => {
        api
            .get('/read/all')
            .then((response) => {
                setRoutines(response.data[0])
            })
            .catch(err => console.log(err));
        
    }, []);
    
    return(
        <main
            style={{
                width: "100%",
                minHeight: "100vh",
                padding: 0,
                margin: 0,
                backgroundImage: "url(src/assets/bck_nine.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.7)"
            }}
        >
            <Redirect path="create" text="Adicionar Rotina" />
            <Top text="Controle de Rotinas" />
            <div
                style={{
                    width: "70%",
                    maxHeight: "calc(100vh - 70px)",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    
                }}
            >
                {routines.map( r => {
                        return <Routine name={r.name} pid={r.pid} routine={r.routine} description={r.description} key={r.routine} />
                })}
            </div>
            
        </main>
    );

};

export {Control};
import React,{ useState } from "react";
import { api } from "../services/api";

type InputsProps = {
    routine: string;
    name: string;
    pid: number;
    active: number;
    path: string;
    archive: string;
    description: string;
}

function Formulary() {

    const [retorno, setRetorno] = useState<string>('');
    const [inputs, setInputs] = useState<InputsProps>({
        routine: "",
        name: "",
        pid: 0,
        active: 0,
        path: "",
        archive: "",
        description: ""
    });
    
    function handleChange(event: any) {
        //inputs[event.target.name as keyof typeof inputs] = event.target.value;

        setInputs({...inputs, [event.target.name as keyof typeof inputs]: event.target.value})
    };

    const handleSubmit: React.FormEventHandler = async (event) => {
        event.preventDefault();
        const req = await api.post('/create', inputs);

        if(req.data.success == true) {
            setInputs({
                routine: "",
                name: "",
                pid: 0,
                active: 0,
                path: "",
                archive: "",
                description: ""
            });
            setRetorno(req.data.message);
            setTimeout(() => {
                setRetorno('');
            }, 5000);
        } else {
            setRetorno(req.data.message);
        };
    };

    const inputStyle = {
        width: "90%",
        height: "70%",
        border: "none",
        backgroundColor: "transparent",
        outline: "none",
        color: "#fff"
    }

    const divFormStyle = {
        width: "300px",
        height: "30px",
        backgroundColor: "#83a8c7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
        marginTop: "3px"
    };

    const divStyle = {
        display: "flex",
        alignItems: "initial",
        fontSize: "smaller"
    }

    return(
        <form 
            style={{
                width: "500px",
                height: "550px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                boxShadow: "0 5px 10px rgba(0,0,0,0.7)"
            }}
            onSubmit={handleSubmit}
        >
            <div style={{...divStyle, flexDirection: "column"}}>
                <p style={{marginTop: "20px", color: "#020f26"}}>Nome da rotina:</p>
                <div style={divFormStyle}>
                    <input 
                        type="text" 
                        placeholder="Insira o nome da rotina" 
                        name="name" 
                        style={inputStyle} onChange={handleChange} 
                        value={inputs.name} 
                    />
                </div>

            </div>

            <div style={{...divStyle, flexDirection: "column"}}>
                <p style={{marginTop: "20px", color: "#020f26"}}>Encurtamento (para URL):</p>
                <div style={divFormStyle}>
                    <input 
                        type="text" 
                        placeholder="Insira um encurtamento para a URL" 
                        name="routine" 
                        style={inputStyle} 
                        onChange={handleChange} 
                        value={inputs.routine} 
                    />
                </div>

            </div>

            <div style={{...divStyle, flexDirection: "column"}}>
                <p style={{marginTop: "20px", color: "#020f26"}}>Caminho da pasta do projeto:</p>
                <div style={divFormStyle}>
                    <input 
                        type="text" 
                        placeholder="Insira o caminho até a pasta do projeto" 
                        name="path" 
                        style={inputStyle} 
                        onChange={handleChange} 
                        value={inputs.path} 
                    />
                </div>

            </div>

            <div style={{...divStyle, flexDirection: "column"}}>
                <p style={{marginTop: "20px", color: "#020f26"}}>Arquivo de execução do projeto:</p>
                <div style={divFormStyle}>
                    <input 
                        type="text" 
                        placeholder="Insira o arquivo de execução do projeto" 
                        name="archive" 
                        style={inputStyle} 
                        onChange={handleChange} 
                        value={inputs.archive} 
                    />
                </div>

            </div>

            <div style={{...divStyle, flexDirection: "column"}}>
                <p style={{marginTop: "20px", color: "#020f26"}}>Descrição do projeto:</p>
                <div style={divFormStyle}>
                    <input 
                        type="text" 
                        placeholder="Insira uma descrição para o projeto" 
                        name="description" 
                        style={inputStyle} 
                        onChange={handleChange} 
                        value={inputs.description} 
                    />
                </div>

            </div>

            <span
                style={{
                    margin: "30px 0",
                    height: "15px",
                    color: "#020f26"
                }}
            >{retorno}</span>

            <input 
                type="submit" 
                value="Registrar" 
                style={{
                    width: "200px",
                    padding: "10px",
                    fontWeight: "bold",
                    backgroundColor: "#0a3457",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "20px",
                    boxShadow: "0 2px 3px #83a8c7"
                }}
            />

        </form>
    )

};

export { Formulary };
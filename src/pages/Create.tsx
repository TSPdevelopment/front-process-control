import { Formulary } from "../components/Formulary";
import { Redirect } from "../components/Redirect";
import { Top } from "../components/Top";

function Create() {
    return(
        <main
            style={{
                backgroundImage: "url(src/assets/bck_nine.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%"
            }}
        >
            <Redirect path="" text="Painel de Controle" />
            <Top text="Criação de Rotina" />
            <section
                style={{
                    width: "100%",
                    height: "calc(100vh - 70px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Formulary />
            </section>
            
        </main>
    );
};

export {Create};
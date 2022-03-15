type RedirectProps = {
    path: string;
    text: string;
};

function Redirect(props: RedirectProps) {
    
    return(
        <button
            style={{
                width: "150px",
                height: "30px",
                backgroundColor: "#0a3457",
                borderRadius: "20px",
                position: "absolute",
                top: "15px",
                right: "15px",
                border: "none"
            }}
        >
            <a 
                href={'/'+props.path} 
                style={{
                    textDecoration: "none", 
                    width: "150px", 
                    height:"100%", 
                    color: "#fff",
                    fontSize: "1em",
                    fontWeight: "bold"
                }}>
                    {props.text}
                </a>
        </button>
        
    );
};

export { Redirect };
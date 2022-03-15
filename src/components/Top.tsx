type TopProps = {
    text: string
}

function Top(props: TopProps) {

    return(
        <div style={{
            width: "100%",
            height: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            backgroundColor: "#000"
        }}>
            <h1>{props.text}</h1>
        </div>
    )

};

export { Top }
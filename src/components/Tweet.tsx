type TweetProps = {
    text: string;
}

function Tweet(props: TweetProps) {
    return(
        <p>{props.text}</p>
    );
}

export {Tweet}
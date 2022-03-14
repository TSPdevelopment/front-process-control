import { useState } from "react"
import { Tweet } from "./components/Tweet"
import { AppRoutes } from "./Routes"

function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
  ])

  function createTweet(){
    setTweets([...tweets, "Tweet 5"])
  }

  return (
    <AppRoutes />
    /*<div>
      {tweets.map( tweet => {
        return <Tweet text={tweet} />
      })}

      <button
        onClick={createTweet}
        style={
          {
            backgroundColor: "#223487",
            border: 0,
            padding: '5px',
            color: '#fff'
          }
        }
      >
        Adicionar tweet
      </button>
    </div>*/
    
  )
}

export default App

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState("")
  const [latestMessage, setLatestMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connection Made.");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      setLatestMessage(message.data);
    };
    return()=>{
      socket.close()
    }
  }, [socket]);

  if (!socket) {
    return <h1>Connecting to Socket Server......</h1>;
  }

  const handleSend = ()=>{
    socket.send(message)
  }

  return (
    <>
      <input type="text" onChange={(e)=>{setMessage(e.target.value)}} value={message} placeholder="Type your message" />
      <button onClick={handleSend}>Send</button>
      {latestMessage}
    </>
  );
}

export default App;

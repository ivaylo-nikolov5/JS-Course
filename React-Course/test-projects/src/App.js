import React from "react";
import "./style.css"

function App() {
    const [messages, setMessages] = React.useState(["a", "b"])

    const unreadMessages = messages.length === 0 ? "You're all caught" : 
    `You have ${messages.length} unread ${messages.length === 1 ? "message" : "messages"}`;

    return (
        <div>
            <h1>{unreadMessages}</h1>
        </div>
    )
}

export default App;

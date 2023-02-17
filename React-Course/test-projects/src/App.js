import React from "react";
import "./style.css"

function App() {
    const [messages, setMessages] = React.useState(["a", "b"])

    return (
        <div>
            {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
        </div>
    )
}

export default App;

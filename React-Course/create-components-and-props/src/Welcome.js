import Message from "./Message";

function Welcome(props) {

    return <div>
        <h1>Hello {props.name}!</h1>
        <Message message="Top G is a BILLIONAIRE!"/>
    </div>
}

export default Welcome;
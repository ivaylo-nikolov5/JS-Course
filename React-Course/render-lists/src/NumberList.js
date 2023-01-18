function NumberList(props) {
    return <ul>
        {props.numbers.map((number) => (
        <li key={number}><h1>{number}</h1></li>))}
    </ul>
}

export default NumberList;
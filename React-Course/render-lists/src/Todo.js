function Todos(props) {
    const tasks = props.tasks.map(task => (
        <h1 key={task.id}>Task number: {task.id}, Task: {task.name}, Condition: {task.isDone? "Finished": "Unfinished"}</h1>
    ));

    return <ul>
        {tasks}
    </ul>
}

export default Todos;
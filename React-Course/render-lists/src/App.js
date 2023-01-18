import logo from './logo.svg';
import './App.css';
import NumberList from './NumberList';
import Todos from './Todo'

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, "Hello World!"];
  const numbers2 = [22, 41, 553, 65, "Hello World!"];
  const todos = [{id: "1", name: "Coding", isDone: false},
                  {id: "2", name: "Workout", isDone: false},
                  {id: "3", name: "Go for a walk", isDone: true}]
  return <div>
    <NumberList numbers={numbers}/>;
    <NumberList numbers={numbers2}/>;
    <Todos tasks={todos}/>
  </div>
}

export default App;

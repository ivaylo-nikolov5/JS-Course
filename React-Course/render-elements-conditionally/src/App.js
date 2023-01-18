import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import LoginControl from './LoginControl';

function App() {
  return (
    <div>
      <LoginControl hasNewMessage={true} credit={10} hasWarning={true}/>

    </div>
  )
}

export default App;

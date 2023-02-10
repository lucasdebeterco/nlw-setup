import './styles/global.css'
import {Habit} from "./components/Habit";

function App() {
  return (
      <div>
          <h1>Hello world</h1>

          <Habit completed={3}/>
          <Habit completed={5}/>
          <Habit completed={20}/>
      </div>
  )
}

export default App

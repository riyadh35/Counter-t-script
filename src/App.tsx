import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';





let student: string = 'Riyad';
let age: number = 22;
let isSmart: boolean = false;


let students: string[] = ['joe', 'Biden', 'Harris'];
let fees: number[] = [12, 45, 79, 12, 45];

interface Person {
  name: string;
  job?: string;
  employed: boolean | number;
  age: number;
  location?: string | number;
}


const person: Person = {
  name: 'Jhankar ',
  employed: true,
  age: 85,
  location: 55,
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;

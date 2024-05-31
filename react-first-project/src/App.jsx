import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../src/home/home.css"
// import RaselComponent from './components/rasel'
// import Sarkercomponent from './components/sarker';
// import ToDo from './ToDo'
import Actor from './Actor'
import Singer from './Singer'


function App() {
  const actors = ['Sakib', 'Rasel', 'Sarker', 'Shoriful', 'Aynal Bantu'];

  const singers = [
    { id: 1, name: 'Sakib', age: 36 },
    { id: 2, name: 'Rasel', age: 26 },
    { id: 3, name: 'Sabana', age: 32 },
    { id: 4, name: 'Boockor', age: 29 },
    { id: 5, name: 'Sarker', age: 22 },
  ];

  return (
    <div>
      {singers.map((singer) => (
        <Singer key={singer.id} name={singer.name} age={singer.age} />
      ))}
      <ul>
        <Actor name="Rasel Sarker" />
        {actors.map((actor, index) => (
          <Actor key={index} name={actor} />
        ))}
      </ul>
    </div>
  );
}





// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <DoList task="Learn React native development." isDone={false} />
//       <DoList task="I'm first time learning React." isDone={false} />
//       <DoList isDone={true} />
//     </>
//   )
// }



// function Person () {
//   const age = 25;
//   const money = 100;
//   const person = {name: "Rasel", age: 20};
//   return <h2>I am {person.name}, with age: {age+money}</h2>

// }



// // Now i use Props.
// const {grade, score} = {grade : '4.00', score : '95'}

// function Student({grade, score}){
//   console.log(grade, score);
//   return(
//     <div className='student'>
//       <h1>I'm a student.</h1>
//       <p>Class : {grade}</p>
//       <p>score : {score}</p>
//     </div>
//   )

// }

// function Teacher() {
//   return (
//     <div>
//       <h1>I am a Teacher in Horinabari.</h1>
//       <h2>Name: Rabeul Islam</h2>
//       <h2>Age: 24</h2>
//       <h2>Department: Electrical and Electronic Engineering</h2>
//       <h2>District: Horinabari</h2>
//     </div>
//   );
// }


export default App

import './App.css'
import Counter from './Counter'
import Clock from './Clock'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'
import Posts from './Posts'

function App() {

  // Normal function
  function handleClick() {
    alert('Welcome to Awesome React component')
  }

  // Arrow function
  const handleClick2 = () => {
    alert('Welcome to Awesome React component')
  }

  return (
    <>


      <Posts></Posts>
      <Friend></Friend>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <Clock></Clock>

      <h1>Welcome to Awesome React components</h1>


      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>

    </>
  )
}

export default App

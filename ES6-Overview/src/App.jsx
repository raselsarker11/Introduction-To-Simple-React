
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  // Option ->03 jahatu api diya fatch korbo sehatu watch ar state declaire korbo.
  const [watches, setWatches] = useState([])

  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, [])
  

  // Option ->01 like simple javascript style.
  // const watches = [
  //   {id : 1, name : 'Apples', price : 3000},
  //   {id : 2, name : 'Samsung', price : 5000},
  //   {id : 3, name : 'Relmi', price : 7000},
  //   {id : 4, name : 'MI', price : 11000},
  // ]


  // Option ->02  array of objects data 
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 8",
  //     price: 399
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 5",
  //     price: 279
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Versa 3",
  //     price: 229
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Venu 2",
  //     price: 349
  //   },
  //   {
  //     id: 5,
  //     name: "Amazfit GTS 3",
  //     price: 179
  //   }
  // ];

  
  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App

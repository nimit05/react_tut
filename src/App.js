import React , {useState} from 'react'

 const App = () => {
  const [count , Setcount] = useState(0)
  const handleClick = () => {
      let x = count+1;
      Setcount(x)
 
  }
  return(
    <div>
      Hello World {count}
      <br />
      <button onClick = {handleClick}>Set</button>
    </div>
  )
}


export default App;
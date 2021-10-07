import React from "react";
import data from './q.json'
import { TestingPage } from './components/TestingPage';

function App() {
  const [testing, setTesting] = React.useState([])
  const [right, setRight] = React.useState(0)
  const [wrong, setWrong] = React.useState(0)

  React.useEffect(() => {setTesting(data)}, [])
  
  return (<div>
      {
        testing.map((item, i) => <TestingPage 
        {...item} 
        key={i} 
        setRight={setRight}
        setWrong={setWrong}
        />)
      }
      <hr/>
      <div>
        <p> Парвельных: {right} </p>
        <p> Не правельных: {wrong} </p>
      </div>
    </div>
  )
}

export default App;
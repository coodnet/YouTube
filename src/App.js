import logo from './logo.svg'
import './App.css'
import Videos from './Components/Videos/Videos'
import Routing from './Routes/Routing'
import { useContext } from 'react'
import { MyContext } from './Context'
import Mode from './Mode'
function App() {
  const { darking } = useContext(MyContext)

  return (
    <div className={`App ${darking ? 'darkmode' : 'light'}  `}>
      <Routing />
    </div>
  )
}

export default App

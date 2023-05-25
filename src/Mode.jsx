import { useContext } from 'react'
import { MyContext } from './Context'

const Mode = (props) => {
  const { event } = props
  const { darking, darkmode } = useContext(MyContext)

  return (
    <button className='mode__button' onClick={event}>
      {darking ? 'dark' : 'light'}
    </button>
  )
}
export default Mode

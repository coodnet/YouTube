import './Navigators.css'
import home from '../../img/home.png'
import trend from '../../img/trending.png'
import { Link, NavLink } from 'react-router-dom'
const BottomNavigs = () => {
  return (
    <div className='bottom__navigs'>
      <Link className='logotip__navig  ' to='/'>
        <img src={home} alt='' />
      </Link>

      <Link className='logotip__navig  ' to='/trend'>
        <img src={trend} alt='' />
      </Link>
      <NavLink className='logotip__navig text-red ' to='/sign'>
        <p className='text-base '>Sign in</p>
      </NavLink>
    </div>
  )
}
export default BottomNavigs

import './Navigators.css'
import utube from '../../img/Black.png'
import home from '../../img/home.png'
import trend from '../../img/trending.png'
import subs from '../../img/Subs.png'
import library from '../../img/library.png'
import history from '../../img/history.png'
import liked from '../../img/liked.png'
import music from '../../img/music.png'
import game from '../../img/game.png'
import setting from '../../img/settings.png'
import { Link, NavLink } from 'react-router-dom'
import { MyContext } from '../../Context'
import { useContext } from 'react'

const Navigators = () => {
  const { darking } = useContext(MyContext)

  return (
    <div
      className={`w-64 h-screen navigators ${darking ? 'darkmode' : 'light'}`}
    >
      <Link to='/' className='youtube h-12 w-full	'>
        <img src={utube} alt='' />
      </Link>

      <div className='navigators__navig w-full'>
        <Link className='logotip__navig  ' to='/'>
          <img src={home} alt='' />
          <p className='text-base text-red-600'>Home</p>
        </Link>

        <Link className='logotip__navig  ' to='/trend'>
          <img src={trend} alt='' />
          <p className='text-base '>Trending</p>
        </Link>
        <NavLink className='logotip__navig text-red ' to='/sign'>
          <img src={subs} alt='' />
          <p className='text-base '>Sign in</p>
        </NavLink>
        <div className='logotip__navig  '>
          <img src={library} alt='' />
          <p className='text-base'>Library</p>
        </div>
        <div className='logotip__navig  '>
          <img src={history} alt='' />
          <p className='text-base '>History</p>
        </div>
        <div className='logotip__navig  '>
          <img src={liked} alt='' />
          <p className='text-base '>Liked</p>
        </div>
        <div className='logotip__navig  '>
          <img src={music} alt='' />
          <p className='text-base '>Music</p>
        </div>
        <div className='logotip__navig  '>
          <img src={game} alt='' />
          <p className='text-base '>Games</p>
        </div>
      </div>

      <div className='setting logotip__navig'>
        <img src={setting} alt='' />
        <p className='text-base '>Settings</p>
      </div>
    </div>
  )
}
export default Navigators

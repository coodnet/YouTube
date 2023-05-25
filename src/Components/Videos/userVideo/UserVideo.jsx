import './UserVideo.css'
import user from '../../../img/Userpic.png'
import oblojka from '../../../img/Cover.png'
import { Link, useParams } from 'react-router-dom'

const UserVideo = (props) => {
  const { channelTitle, id, title, img } = props

  return (
    <Link to={`/singlevideo/${id}`}>
      <div className='targ__videos'>
        <div className='target__video'>
          <img src={img} alt='' />
        </div>
        <p className='video__title'>{title}</p>
        <div className='video__detail'>
          <p>{channelTitle}</p>
        </div>

        {/* <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameborder='0'
        >ccc</iframe> */}
      </div>
    </Link>
  )
}
export default UserVideo

import { Link, useParams } from 'react-router-dom'
import Navigators from './Navigators/Navigators'
import user from '../img/Userpic.png'
import './Videopage.css'
import UserVideo from './Videos/userVideo/UserVideo'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import BottomNavigs from './Navigators/BottomNavigs'
import { MyContext } from '../Context'
const VideoPage = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const { darking } = useContext(MyContext)

  const fetching = async () => {
    const options = {
      method: 'GET',
      url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
      params: {
        geo: 'US',
        lang: 'en',
      },
      headers: {
        'X-RapidAPI-Key': '7da83e8cdemsh71c5e2d155f1a08p188b14jsnd707f0b66054',
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
      },
    }

    try {
      const response = await axios.request(options)
      const baseData = response.data
      setData(baseData.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetching()
  }, [])
  return (
    <div className={`${darking ? 'darkmode' : 'light'}`}>
      <Navigators />

      <div
        className={`single__video w-4/5 h-screen ${
          darking ? 'darkmode' : 'light'
        }`}
      >
        <div className='simpleSingle'>
          <iframe
            className='iframe'
            src={`https://www.youtube.com/embed/${id}`}
            frameborder='0'
            autoFocus
          ></iframe>

          <div
            className={`offer__videos__singlePg ${
              darking ? 'darkmode' : 'light'
            }`}
          >
            {data.map((videoItem) => (
              <UserVideo
                id={videoItem.videoId}
                img={videoItem.thumbnail[2].url}
              />
            ))}
            <UserVideo />
          </div>
        </div>
      </div>
      <BottomNavigs />
    </div>
  )
}
export default VideoPage

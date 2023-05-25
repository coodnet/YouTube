import Navigators from '../Components/Navigators/Navigators'
import '../Components/Videos/Videos.css'
import user from '../img/Userpic.png'
import UserVideo from './Videos/userVideo/UserVideo'
import axios from 'axios'
import { useState, useEffect } from 'react'
import BottomNavigs from './Navigators/BottomNavigs'
import { useContext } from 'react'
import { MyContext } from '../Context'
import Mode from '../Mode'
const Videos = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const { darking, darkmode } = useContext(MyContext)

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

  const searching = (e) => {
    let search = e.target.value.trim().toLowerCase()
    setSearch(search)
  }

  return (
    <div
      className={`videos w-4/5 h-screen ${darking ? 'darkmode' : 'light'}  `}
    >
      <Navigators />

      <div className={`navbar  w-full h-14 ${darking ? 'darkmode' : 'light'}`}>
        <div className='input__bar w-3/5'>
          <input onChange={searching} type='text' placeholder='Search...' />
        </div>

        <div className='details'>
          <Mode event={darkmode} />
          <img src={user} alt='' />
        </div>
      </div>

      <h1 className='tagPopular'>#popular videos</h1>
      <div className='public__videos'>
        {data
          .filter((obj) => obj.title.toLowerCase().includes(search))
          .map((detail, index) => (
            <div key={index}>
              <UserVideo
                title={detail.title}
                id={detail.videoId}
                img={detail.thumbnail[2].url}
                channelTitle={detail.channelTitle}
              />
            </div>
          ))}
        {data
          .filter((obj) => obj.title.toLowerCase().includes(search))
          .map((detail, index) => (
            <div key={index}>
              <UserVideo
                title={detail.title}
                id={detail.videoId}
                img={detail.thumbnail[2].url}
                channelTitle={detail.channelTitle}
              />
            </div>
          ))}
        {data
          .filter((obj) => obj.title.toLowerCase().includes(search))
          .map((detail, index) => (
            <div key={index}>
              <UserVideo
                title={detail.title}
                id={detail.videoId}
                img={detail.thumbnail[2].url}
                channelTitle={detail.channelTitle}
              />
            </div>
          ))}
        {data
          .filter((obj) => obj.title.toLowerCase().includes(search))
          .map((detail, index) => (
            <div key={index}>
              <UserVideo
                title={detail.title}
                id={detail.videoId}
                img={detail.thumbnail[2].url}
                channelTitle={detail.channelTitle}
              />
            </div>
          ))}
      </div>
      <BottomNavigs />
    </div>
  )
}
export default Videos

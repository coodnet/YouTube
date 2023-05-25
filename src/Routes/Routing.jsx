import { Routes, Route } from 'react-router-dom'
import Videos from '../Components/Videos/Videos'
import VideoPage from '../Components/VideoPage'
import PopularVideos from '../Components/PopularVideos'
import Sign from '../Components/Register'
import Login from '../Components/Login'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Videos />} />
        <Route path='/singlevideo/:id' element={<VideoPage />} />
        <Route path='/trend' element={<PopularVideos />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}
export default Routing

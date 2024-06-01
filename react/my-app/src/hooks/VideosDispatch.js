import {useContext} from 'react'
import VideoDispatchContext from '../context/VideoDispatchContext'

const useVideosDispatch = ()=>{
    return useContext(VideoDispatchContext);
}

export default useVideosDispatch
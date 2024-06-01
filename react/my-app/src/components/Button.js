import React, {useState,memo} from 'react'

const Button = memo(function Button({onPlay,onPause,children}) {
  console.log('rendering Playbutton')
  let [isPlaying,setIsPlaying] = useState(true)
  const handleClick = () => {
    if(isPlaying){
      onPlay()
    }else{
      onPause() 
    }
    setIsPlaying(prev=>!prev)
  }
  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {isPlaying ? 'Play' : 'Pause'} : {children}
      </button>
    </div>
  )
})

export default Button
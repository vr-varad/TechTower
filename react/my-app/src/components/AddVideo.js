import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import useVideosDispatch from "../hooks/VideosDispatch";

const AddVideo = forwardRef(function AddVideo({ editableVideo },ref){

  const initialVideo = {
    title: "",
    date: "DD/MM/YYYY",
    views: `${
      Math.trunc(Math.random() * 100) / 100 + Math.trunc(Math.random()) + 10
    } M`,
  }

  const [video, setVideo] = useState(initialVideo);
  
  const iRef = useRef();
  
  const dispatch = useVideosDispatch();

  const handleChange = (e) => {
    setVideo({
      ...video,
      [e.target.id]:
        e.target.id === "title"
          ? e.target.value
          : e.target.value.split("-").reverse().join("/"),
    });
  };

  useImperativeHandle(ref,()=>{
    return {
      dekh: () => iRef.current.focus()
    }
  },[])




  const handleSubmit = (e) => {
    e.preventDefault();
    if(editableVideo){
      dispatch({type: "UPDATE", payload: video})
    }else{
      dispatch({type: "ADD", payload: video})
    }
    setVideo(initialVideo);
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  },[editableVideo]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-2 border-2 border-black rounded-md"
      >
        <input
        ref={iRef}
          onChange={handleChange}
          type="text"
          id="title"
          value={video.title}
          placeholder="Video Title"
          className="pr-10 pl-1 py-2 border-4 border-black rounded-lg text-black"
        />
        <input
          onChange={handleChange}
          type="text"
          id="date"
          value={video.date}
          placeholder="Video Date"
          className="pr-10 pl-1 py-2 border-4 border-black rounded-lg text-black"
        />
        <button className="bg-red-600 text-white rounded-lg p-2 hover:text-red-600 hover:bg-white border-4 border-red-600 ">
          {editableVideo?'Edit':'Add'} Video
        </button>
      </form>
    </>
  );
})

export default AddVideo;

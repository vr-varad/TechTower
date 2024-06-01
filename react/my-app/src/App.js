import React, { useCallback, useReducer, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/Themecontext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import videoDb from "./data";

function App() {
  console.log("rendering App.");
  const [editableVideo, setEditableVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer,videoDb);
  const [mode, setMode] = useState("dark");
  const inputref = useRef();

  function videoReducer(videos, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        setEditableVideo(null);
        const requiredIndex = videos.findIndex(
          (vid) => vid.id === action.payload.id
        );
        const newVideos = [...videos];
        newVideos.splice(requiredIndex, 1, action.payload);
        return newVideos;
      default:
        return videos;
    }
  }

  const editVideo = useCallback(
    function editVideo(id) {
      setEditableVideo(videos.find((video) => video.id === id));
    },
    [videos]
  );
  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div
            className={`${
              mode === "dark" ? "bg-black text-white" : "bg-white text-black"
            } m-2 p-2 rounded-lg`}
          >
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/fb/9a/96/fb9a966858b5fde12fff804ad0576efb.jpg"
                className="relative mb-10 rounded-md w-[100vw] h-52"
                alt="banner"
              />
              <button
                className={`absolute top-5 right-5 p-2 ${
                  mode === "dark"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } rounded-lg`}
                onClick={() =>
                  setMode((prev) => (prev === "dark" ? "light" : "dark"))
                }
              >
                {mode.toUpperCase()}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <Header videos={videos} />
              <button onClick={()=>inputref.current.dekh()} className={`p-2 ${
                  mode !== "dark"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } rounded-lg`}>AddFocus</button>
              <AddVideo ref={inputref} editableVideo={editableVideo} />
            </div>
            <div>
              <VideoList editVideo={editVideo} />
            </div>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

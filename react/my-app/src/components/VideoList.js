import React, { useCallback, useEffect, useMemo } from "react";
import Video from "./Video";
import Button from "./Button";
import axios from "axios";
import useVideos from "../hooks/Videos";
import useVideosDispatch from "../hooks/VideosDispatch";

const VideoList = ({ editVideo }) => {
  console.log("rendering VideoList");
  const url = "https://my.api.mockaroo.com/utube.json?key=75c4f3e0";
  const videos = useVideos();
  const dispatch = useVideosDispatch();
  async function fetchData() {
    const response = await axios.get(url);
    const data = response.data;
    dispatch({ type: "LOAD", payload: data });
  }

  const play = useCallback(() => console.log(`Play`), []);
  const pause = useCallback(() => console.log(`Pause`), []);
  const memoButton = useMemo(
    () => (
      <Button onPlay={play} onPause={pause}>
        Play
      </Button>
    ),
    [play, pause]
  );
  return (
    <div className="relative">
      <button
        onClick={fetchData}
        className="absolute top-5 right-5 p-2 bg-red-500 text-white rounded-lg">Get Videos</button>
      <h2 className="text-xl mb-5">Videos</h2>
      <div className="font-mono md:grid md:grid-cols-4 flex flex-col gap-10">
        {videos.map((video, index) => (
          <Video
            key={index}
            title={video.title}
            date={video.date}
            views={video.views}
            id={video.id}
            editVideo={editVideo}
          >
            {memoButton}
          </Video>
        ))}
      </div>
    </div>
  );
};

export default VideoList;

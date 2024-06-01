import React, {useState} from "react";
import useVideos from "../hooks/Videos";

const Header = ({}) => {
    const [subscribers, setSubscribers] = useState(1);
    const [subscribed, setSubscribed] = useState(false);
    const subscribe = () => {
        if(subscribed){
            setSubscribers(subscribers-1);
        }else{
            setSubscribers(subscribers+1);
        }
        setSubscribed(!subscribed);
    }

    const videos = useVideos();
  return (
    <div className="flex gap-5 mb-10">
      <img
        className=" rounded-full w-32 h-32"
        src="https://i.pinimg.com/736x/fd/a5/2c/fda52c47b6976f27b8accc9d8841444b.jpg"
        alt="tech-varad"
      />
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="text-3xl">Tech Varad</h1>
        <div className="flex gap-3">
          <h2 className="text-sm text-center">@techvarad</h2>
          <h2 className="text-sm text-center">{subscribers} subscribers</h2>
          <h2 className="text-sm text-center">{videos.length} Videos</h2>
        </div>
        <p className=" text-xs">More About the channel..<a href="https://github.com/vr-varad" className="font-bold">more</a></p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={subscribe}>{!subscribed?"Subscribe":"Unsubscribe"}</button>
      </div>
    </div>
  );
};

export default Header;

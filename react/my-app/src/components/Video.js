import React, {memo} from "react";
import useVideosDispatch from "../hooks/VideosDispatch";

const Video = memo(function Video({ title, date, views, id, children, editVideo }){
  console.log(`rendering Video ${id}`)
  const dispatch = useVideosDispatch()

  const handleDelete = () => {
    dispatch({type: "DELETE", payload: id});
  };

  const handleEdit = () => {
    editVideo(id);
  };

  return (
    <div className="border-2 border-black rounded-lg relative" key={id}>
      <div className="flex flex-col right-6 gap-2 top-6 absolute">
      <button onClick={handleDelete} className="bg-red-600 text-white rounded-lg p-1 hover:text-red-600 hover:bg-white border-4 border-red-600 ">Delete</button>
      <button onClick={handleEdit} className="bg-red-600 text-white rounded-lg p-1 hover:text-red-600 hover:bg-white border-4 border-red-600 ">Edit</button>
      </div>
      <div>
        <img
          src={`https://picsum.photos/id/${id}/300/200`}
          alt="thumbnail"
          className="w-[100%]"
        />
      </div>
      <div>
        <h3 className="text-[1em] font-semibold">{title}</h3>
      </div>
      <div>
        <h6>Tech Varad</h6>
      </div>
      <div className="flex text-xs justify-start gap-2">
        <p className="">{views} views</p>
        <p>|</p>
        <p>{date} </p>
      </div>
      {children}
    </div>
  );
});

export default Video;

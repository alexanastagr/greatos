import { useEffect } from "react";
import { useAtom } from "jotai";
import { IoMdClose } from "react-icons/io";

export default function PhotosWindow({ c }) {

  return (
    <div className="tasksWindow">
      <div className="titlebar">
        <div className="title">📋 Photo Gallery</div>

        {/* button close */}
        <div className="close" onClick={c}>
          <IoMdClose size={32} color="#fff" />
        </div>
      </div>

      {/* window content */}
      <div className="content">
        
      </div>
    </div>
  );
}

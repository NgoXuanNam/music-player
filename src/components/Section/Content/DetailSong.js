import React, { useContext } from "react";
import { Songs } from "../../../Context";
export default function DetailSong() {
  const { song } = useContext(Songs);

  return (
    <div className="detailSong col-span-1  p-3 overflow-y-scroll">
      <div className="detailSong_heading ">
        <h3 className="text-[1.2rem] font-medium text-[#38bdf8]">
          Now playing
        </h3>
        <p className="text-[1.6rem] text-[#ddd]">{song.name}</p>
      </div>
      <div className="detailSong_body w-full flex flex-col justify-center items-center mt-5">
        <img src={song.links.images[0].url} alt="avatar" className="w-[70%] " />
        <div className="detailSong_body-author flex min-w-[70%] items-center justify-between mt-5">
          <img
            src={song.links.images[1].url}
            alt="avatar"
            className="w-14 h-14 rounded-full"
          />
          <p className="text-white text-[1.6rem]">{song.author}</p>
        </div>
      </div>
    </div>
  );
}

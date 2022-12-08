import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../../Context";

export default function ListSong() {
  const { DataSongs, song, handleSetSong } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);

  const handleChooseSong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setIdSong(song.id);
  }, [song]);

  return (
    <div className="listSong col-span-2 overflow-y-scroll ">
      <table className="table-auto w-full">
        <thead className="text-white h-12 sticky top-0 bg-slate-700">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Song Name</th>
            <th className="w-[10%]">Singer</th>
            <th className="w-[10%]">
              <i class="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`h-12 bg-slate-800 text-slate-300 hover:bg-slate-500 hover:text-white ${
                idSong === song.id && "text-[#fff] bg-slate-500"
              }`}
              onClick={() => handleChooseSong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i class="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

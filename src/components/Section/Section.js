import React from "react";
import DetailSong from "./Content/DetailSong";
import ListSong from "./Content/ListSong";

export default function Section() {
  return (
    <div className="section grid grid-cols-3 bg-slate-700 overflow-hidden">
      <DetailSong />
      <ListSong />
    </div>
  );
}

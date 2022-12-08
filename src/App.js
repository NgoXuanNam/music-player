import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

import DataSongs from "./Data/songs.json";
import { Songs } from "./Context";
import { useState } from "react";
function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const findSong = DataSongs.find((song) => song.id === idSong);
    if (findSong) {
      setSong(findSong);
    } else {
      setSong(DataSongs[0]);
    }
  };

  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Header />
        <Section />
        <Footer />
      </Songs.Provider>
    </div>
  );
}

export default App;

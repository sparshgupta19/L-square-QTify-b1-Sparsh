import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import React, { useEffect, useState } from "react";
import styles from "./App.css";
// import BasicAccordion from "./components/Accordion/Accordion";

function App() {
  const [TopAlbums, setTopAlbums] = useState([]);
  const [NewAlbums, setNewAlbums] = useState([]);
  const [songsData, setSongs] = useState([]);

  const generateApiData = async () => {
    try {
      const dataTopAlbums = await fetchTopAlbums();
      const dataNewAlbums = await fetchNewAlbums();
      const dataSongs = await fetchSongs();
      setTopAlbums(dataTopAlbums);
      setNewAlbums(dataNewAlbums);
      setSongs(dataSongs);
      setfilteredDataValues(dataSongs);
    } catch (err) {
      console.log(err);
    }
  };

  //Initiate first render of components
  useEffect(() => {
    generateApiData();
  }, []);

  //Get filtered data value for Songs
  const [filteredDataValues, setfilteredDataValues] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredData = (val) => {
    setfilteredDataValues(val);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }

    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  return (
    <>
      <Navbar data={TopAlbums} />
      <Hero/>
      <div className={styles.sectionWrapper}>
        <Section
          type="album"
          title="Top Albums"
          data={TopAlbums}
          filteredDataValues={TopAlbums}
        />
        <Section
          type="album"
          title="New Albums"
          data={NewAlbums}
          filteredDataValues={NewAlbums}
        />
        <Section
          type="song"
          title="Songs"
          data={songsData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
        />
        {/* <BasicAccordion /> */}
      </div>
    </>
  );
}

export default App;
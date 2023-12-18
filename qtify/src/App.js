import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import {StyledEngineProvider} from "@mui/material";
import {Outlet} from 'react-router-dom';
import {fetchNewAlbums, fetchTopAlbums} from './api/api'


function App() {
  const [data,setData] =useState({});
  const generateData = (key,source) =>{
    source().then((data) =>{
      setData((prevState)=>{
        return {...prevState, [key]:data};
      })
    })
  }
  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
  },[]);

const {topAlbums = [], newAlbums = []} =data;

  return (
   <>
   <StyledEngineProvider injectFirst>
   <Navbar/>
   <Hero/>
   <Outlet context={{data: {topAlbums,newAlbums}}}/>
   </StyledEngineProvider>
   </>
  );
}

export default App;

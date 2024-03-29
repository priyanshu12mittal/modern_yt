import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed } from './components';


function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<Feed></Feed>}></Route>
          <Route path='/video/:id' element={<VideoDetail></VideoDetail>}></Route>
          <Route path='/channel/:id' element={<ChannelDetail></ChannelDetail>}></Route>
          <Route path='/search/:searchTerm' element={<SearchFeed></SearchFeed>}></Route>
        </Routes>
      </Box> 
    </BrowserRouter>
  );
}

export default App;

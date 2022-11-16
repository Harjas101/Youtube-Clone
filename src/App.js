import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import ChannelDetail from './components/ChannelDetail';

const App = () => 
  (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path='/video/:id' element={<VideoDetail />}/>
          <Route path='/Search/:id' element={<SearchFeed />}/>
          <Route path='/channel/:id' element={<ChannelDetail />}/>
        </Routes>
    </Box>
    </BrowserRouter>
  )


export default App

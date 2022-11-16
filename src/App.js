import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'

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

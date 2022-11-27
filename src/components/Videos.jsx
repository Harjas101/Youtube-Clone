import React from 'react'
import { Stack, Box } from '@mui/material'
const Videos = ({videos}) => {
  
  return (
    <Stack direction="row" flexWrap='wrap' justifyContent='Start' gap={2}>
      {videos.map((item,idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard
          video={item} />}

        </Box>
      ))}
    </Stack>
     
  )
}

export default Videos

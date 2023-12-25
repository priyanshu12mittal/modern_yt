import React, { useEffect,useState } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { FetchFromAPI } from '../utils/FetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState()
  const [videos, setvideos] = useState([])
  const {id} = useParams();
  console.log(channelDetail,videos)
  useEffect(()=>{
    FetchFromAPI(`channels?.part=snippet&id=${id}`)
    .then((data) =>setchannelDetail(data?.items[0]));

    FetchFromAPI(`search?.channelId=${id}&part=snippet&order=date`)
    .then((data) =>setvideos(data?.items));
    
  },[id])

  return (
   <Box minHeight="95vh">
      <Box>
      <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px"></ChannelCard>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:"100px"}}}/>
          <Videos videos={videos}></Videos>
      </Box>
   </Box>
  )
}

export default ChannelDetail

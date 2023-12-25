import React, { useEffect,useState } from 'react'
import { Box,Typography } from '@mui/material';
import {Videos} from './';
import {FetchFromAPI} from '../utils/FetchFromAPI';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {
  const [videos, setvideos] = useState([])
  const {searchTerm} = useParams();

  useEffect(()=>{
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data)=>setvideos(data.items))
  },[searchTerm]);

  return (
    <Box p={2} sx={{overflow:"auto",height:"90vh",flex:2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:"white"}} >
        Search Results for: <span style={{color:"#f31503"}}>{searchTerm} Videos</span>
      </Typography>
      <Videos videos={videos}></Videos>
  </Box>
  )
}

export default SearchFeed;

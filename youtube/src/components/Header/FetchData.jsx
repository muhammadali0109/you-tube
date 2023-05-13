import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Header/FetchData.css'
import SinglPage from '../SingelPage/SinglPage';

const FetchData = () => {
    // const axios = require('axios');
    const [newsData, setNewsData] = useState([]);

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/captions',
//   params: {
//     part: 'snippet',
//     videoId: 'M7FIvfx5J10'
//   },
//   headers: {
//     'X-RapidAPI-Key': '5f02615f38mshb9065bdc9ffb077p1f5bc4jsnf8df466e23b9',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };
// const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '5f02615f38mshb9065bdc9ffb077p1f5bc4jsnf8df466e23b9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetchMe = async () => {
    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data.items);
    //     setNewsData(response.data.items);

    // } catch (error) {
    //     console.error(error);
    // }
    try {
        const response = await axios.request(options);
        // console.log(response.data.items);
        setNewsData(response.data.items);
    } catch (error) {
        console.error(error);
    }
}
useEffect(() => {
    fetchMe()
  },[])
  // const myData =  newsData.filter((item)=>{

  //   if(!searchTitle.trim()){
  //       return item;
  //   } else if (item.snippet.title.toLowerCase().includes(searchTitle.toLowerCase())){
  //       return item;
  //   }

  return (
    // <div>FetchData</div>
    <div className='MapDiv'>
      <div className='MapMainDiv'>
        <div className='MApMidleDiv grid gap-5 grid-cols-12'>
        {
        newsData.slice(0,15).map((element) => (
              <Link to="/video" element={<SinglPage id={element.id.videoId}/>}>
              <div className='MapDiv'>
                <img src={element?.snippet?.thumbnails?.medium?.url} alt={element.snippet.title}/>
              {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa'></iframe> */}
              <p className='MapP'>{element.snippet.channelTitle}</p>
              <span className='MapSpan'>{element.snippet.title}</span>
              <span>publishTime<data>{element.snippet.publishTime}</data></span>
              </div>
              </Link>
              
          
          ))
       }
        </div>
      </div>
      <div className='MapMainDiv'>
        <div className='MApMidleDiv grid gap-5 grid-cols-12'>
        {
        newsData.slice(15,30).map((element) => (
              <div className='MapDiv2'>
              <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa2'></iframe>
              <p className='MapP2'>{element.snippet.channelTitle}</p>
              <span className='MapSpan2'>{element.snippet.title}</span>
              <span className='MapSpan2'>publishTime<data>{element.snippet.publishTime}</data></span>
              </div>
              
          
          ))
          
       }
        </div>
      </div>
      <div className='MapMainDiv'>
        <div className='MApMidleDiv grid gap-5 grid-cols-12'>
        {
        newsData.slice(30,50).map((element) => (
              <div className='MapDiv2'>
              <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa2'></iframe>
              <p className='MapP2'>{element.snippet.channelTitle}</p>
              <span className='MapSpan2'>{element.snippet.title}</span>
              <span className='MapSpan2'>publishTime<data>{element.snippet.publishTime}</data></span>
              </div>
              
          
          ))
       }
        </div>
      </div>
    </div>
  )
}

export default FetchData
import React from 'react';
import {Text} from 'react-native';
import axios from 'axios';

export default function Navbar() {
  const[data,setdata]=useState([]);

  useEffect(()=>{
  axios.get('https://source.unsplash.com/photos/random?count=20').then((res) =>{
  res.data.map((unit) => setdata((prevState)=>{
    [...prevState,unit]
  }))
  })
  },[])

  return (
    <Text>These is Gallery page </Text>
  )
}
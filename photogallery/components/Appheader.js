import React from 'react'
import {Header} from 'react-native-elements';


export default function Appheader() {
  return (
    <Header 
    backgroundColor={'#03c4a1'}
    centerComponent={{
    text:"Photo Gallery App",
    style: {color:'#fff',
    fontWeight:'bolder',
    fontSize:'x-large',
    fontFamily:'cursive'
    }
    }}
    />
  )
}
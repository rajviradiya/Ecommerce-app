import logo from './logo.svg';
import './App.css';
import {getdata} from "./Utils/axios"
import {  useEffect, useState } from 'react';
import HeroNav from './Layout/HeroNav';
import Body from './Layout/Body';

function App() {

  const [data,setData] =useState([])
  
  useEffect(()=>{
    getdata.data( ).then((res)=>{
      console.log(res,"hi")
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <HeroNav/>
      <Body/>
    </div >
  );
}

export default App;

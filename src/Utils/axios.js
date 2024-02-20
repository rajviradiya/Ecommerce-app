import axios from "axios"
import { Url } from "../configs/Urls"

const data = async ()=> {
   const getdata = await axios.get(Url.product)
   return getdata
}

const cart = async()=>{
   const getdata = await axios.get(Url.Cart)
   return getdata
}

const cartpost = async (obj)=>{
   const postdata = await axios.post(Url.Cart,obj)
   return postdata
}  
const cartpatch = async (id,obj)=>{
   const cartpatch = await axios.patch(`http://localhost:5000/carts/${id}`, obj);
   return cartpatch;
}
const cartput = async (id,obj)=>{
   const cartput = await axios.put( `http://localhost:5000/carts/${id}`,obj)
   return cartput
}

const cartdelete = async (id)=>{
   const cartdelete = await axios.delete( `http://localhost:5000/carts/${id}`)
   return cartdelete
}

export const getdata = {data,cart,cartpost,cartpatch,cartput,cartdelete}

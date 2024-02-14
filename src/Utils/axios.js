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

export const getdata = {data,cart,cartpost}

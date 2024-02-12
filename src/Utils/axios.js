import axios from "axios"
import { Url } from "../configs/Urls"

const data = async ()=> {
   const getdata = await axios.get(Url)
   return getdata
}

export const getdata = {data}
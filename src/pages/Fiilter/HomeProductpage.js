import React, { useEffect, useState } from 'react'
import { CatagoryCard } from '../Firstpage/Cards/CatagoryCard'

const HomeProductpage = ({db,setDb}) => {
    const [newdb, setnewdb] = useState([])

    useEffect(() => {
        const newdata = db.filter((items) => {
            return items.category === "groceries"
        })
        setnewdb(newdata)
    },[])

  return (
    <CatagoryCard db={newdb} setDb={setnewdb}/>
  )
}

export default HomeProductpage
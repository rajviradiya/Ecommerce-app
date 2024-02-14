import React, { useEffect, useState } from 'react'
import { CatagoryCard } from '../Firstpage/Component/CatagoryCard'

const SkinCare = ({db,setDb}) => {
    const [newdb, setnewdb] = useState([])

    useEffect(() => {
        const newdata = db.filter((items) => {
            return items.category === "skincare"
        })
        setnewdb(newdata)
    },[])

  return (
    <CatagoryCard db={newdb} setDb={setnewdb}/>
  )
}

export default SkinCare
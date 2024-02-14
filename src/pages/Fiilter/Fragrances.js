import React, { useEffect, useState } from 'react'
import { CatagoryCard } from '../Firstpage/Component/CatagoryCard'

const Fragrances = ({db,setDb}) => {
    const [newdb, setnewdb] = useState([])

    useEffect(() => {
        const newdata = db.filter((items) => {
            return items.category === "fragrances"
        })
        setnewdb(newdata)
    },[])

  return (
    <CatagoryCard db={newdb} setDb={setnewdb}/>
  )
}

export default Fragrances
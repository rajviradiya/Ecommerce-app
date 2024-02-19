import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CatagoryCard } from './Component/CatagoryCard';

const FilterProduct = ({db ,setDb}) => {
    
    console.log(db)
    const {category} = useParams()
     const filteredProducts = db.filter(product => product.category === category);

  return (
    <>
    <CatagoryCard db={filteredProducts} setDb={setDb}/>
    </>
  )
}

export default FilterProduct
import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'
import AppDownLoad from '../../components/AppDownload/AppDownLoad.jsx'

const Home=()=> {
  
  const [category, setCategory] = useState("All")
  return (
    <div>
        <Header/>
         <ExploreMenu Category={category} setCategory={setCategory}/>
         <FoodDisplay  category={category}/>
         <AppDownLoad/>
    </div>
  )
}

export default Home 
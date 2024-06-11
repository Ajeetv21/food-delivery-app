import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownLoad.css'

const AppDownLoad = () => {
  return (
    <div className="app-download" id='app-download'>
       <p>For Better Expreriance  <br /> Tomoto App</p>
       <div className="app-download-plateforms">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
       </div>
    </div>
  )
}

export default AppDownLoad
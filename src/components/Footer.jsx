import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
<img src={assets.logo} alt="logo" width={150}/>
<p className="flex-1 border-l border-gray-400 pl-4 text-sm max:sm-hidden">All right reserved. Copyright </p>
<div className="flex justidy-between gap-4">
    <img src={assets.instagram_icon} alt="" width={35}/>
    <img src={assets.facebook_icon} alt=""width={35}/>
    <img src={assets.twitter_icon} alt=""width={35}/>

</div>

    </div>
  )
}

export default Footer
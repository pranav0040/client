import React,{useContext} from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const GenerateBtn = () => {

  const {user,setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler=()=>{
    if(user)
      navigate('/result')
    else
    setShowLogin(true)
  }
  return (
    <motion.div className="pb-16 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">See the magic. Try now</h1>
        <motion.button className="inline-flex items-center gap 2 mt-8 px-12 py-2.5 text-white rounded-full w-auto border bg-black hover:scale-105 transition-all duration-500"
        onClick={onClickHandler}
       
        >Generate Images <img src={assets.star_group} alt="star"className="h-6" /></motion.button>
    </motion.div>
  )
}

export default GenerateBtn
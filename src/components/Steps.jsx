import React from 'react'
import {stepsData} from '../assets/assets'
import { motion } from 'motion/react'
const Steps = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center my-32"
    initial={{opacity:0, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
            How it works </h1>
        <p className="text-lg text-gray-600 mb-8">Transform words into stunning images</p>

        <div className="space-y-4 w-full max-w-3xl text-sm">
            {stepsData.map((item,index)=>(
                <div className="flex items-center gap-4 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-l px-8 p-5" key={index}>
                    <img width={40} src={item.icon} alt="" />
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        </div>
                    </div>
            ))}
        </div>
       

    </motion.div>
  )
}

export default Steps
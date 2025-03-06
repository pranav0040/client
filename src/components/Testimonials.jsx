import React from 'react'
import { testimonialsData } from '../assets/assets'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
const Testimonials = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center my-20 py-12"
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}>
        <h1 className="text-3xl sm:text-4xl font-semibold center mb-2">Customer testimonials</h1>
        <p className="text-gray-500 mb-8">What Our Users Are Saying</p>

        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center gap-10  sm:
        gap-4  md:gap-6  lg:gap-10">

           {testimonialsData.map((testimonial,index)=>(
            <div className="bg-white/20 p-20 rounded-lg shadow-md w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all" key={index}>
              
              <div className=" flex flex-col items-center">
                <img src={testimonial.image} alt="profile" className="rounded-full w-14" />
                <h2 className="text-xl font-semibold mt-4">{testimonial.name}</h2>
                <p className="text-grey-500 mb-4">{testimonial.role}</p>
                <div className="flex">{Array(testimonial.stars).fill().map((item,index)=>(
                    <img key={index} src={assets.rating_star} alt="" />
                ))}</div>
                <p className="text-center text-sm mt-4">{testimonial.text}</p>

                             </div></div>
           ))}
        </div>
    </motion.div>
  )
}

export default Testimonials
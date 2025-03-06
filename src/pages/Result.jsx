import React,{useContext, useState} from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'

const Result = () => {
  const {generateImage}= useContext(AppContext)
  const [image,setImage]=useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading,setLoading]=useState(false);
  const [input,setInput]=useState('');
  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    setLoading(true)
    if(input){
    const image = await generateImage(input)
    if(image){
      setIsImageLoaded(true)
      setImage(image)
    
    }
    else{
      console.log("no image returned")
    }
    }
 
    setLoading(false)
  }
  const handleDownload = () => {
    if (!image || image === assets.sample_img_1) return; 

    const link = document.createElement('a');
    link.href = image;
    link.download = 'generated-image.png'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.form className="flex flex-col min-h-[90vh] justify-center items-center"
    initial={{opacity:0, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    onSubmit={onSubmitHandler}> 
    <div>
      <div className="relative ">
        <img className="max-w-sm rounded" src={image} alt="sample"/>
        <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ?`w-full transition-all duration-[10s]` : `w-0`}`}></span>
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading........</p>
      </div>

     {!isImageLoaded && 
      <div className="flex w-full max-w-xl bg-neutral-500  text-white text-sm p-0.5 mt-10 rounded-full">
<input type="text" className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color" onChange={e=>setInput(e.target.value)} placeholder="Describe what you want to generate " value={input}/>
<button type="submit" className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full">Generate</button>
      </div>
}
      {isImageLoaded &&
      <div className="flex gap-2 flex-wrap justify-center text-white text-sm o-0.5 mt-10 rounded-full">
      <p className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer" onClick={()=>{setIsImageLoaded(false)}}>Generate Another</p>
      <button type="button" className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer" onClick={handleDownload}>Download</button>
      </div>
}
    
    </motion.form>
  )
}

export default Result
import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {
 
    const[state, setState] = useState('Login')
    const {showLogin,setShowLogin,backendURL,setToken,setUser}=useContext(AppContext)

    const [name, setName]  = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try{
            
            if(state === 'Login'){
              const {data} =  await axios.post(backendURL+'/api/user/login', {email, password})
            
            if(data.success)   {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token',data.token)
                    setShowLogin(false)
            }else{
                console.error("err 1")
                toast.error( data.message)
            }
        }
        else{
            const {data} =  await axios.post(backendURL+'/api/user/register', {name,email, password})
        
        if(data.success)   {
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token',data.token)
                setShowLogin(false)
        }else{
            console.error("err 2")
            toast.error(   data.message)
        }
        }
        }
    
        catch(error){
            console.log("Err 3");
           toast.error(error.message)
        }
    }

    useEffect(() => {
        document.body.style.overflow='hidden';
        return () => {
            document.body.style.overflow='unset';
        }
    },[])
  return (
    
    <div className='fixed top-0 left-0 
    right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

        <motion.form 
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
        initial={{opacity:0.2, y:50}}
        transition={{duration:0.3}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        >
            <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
            <p>Welcome back! Please Sign in to continue</p>

           {state !=='Login' && <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                <img width={30} src={assets.profile_icon} alt="user" />
                <input type="text" className="outline-none text-sm" placeholder="Full Name" required onChange={e=> setName(e.target.value)} value={name}/>
            </div>}

            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                <img width={25} src={assets.email_icon} alt="user" />
                <input type="text" className="outline-none text-sm" placeholder="Email" required 
                onChange={e=> setEmail(e.target.value)} value={email}/>
            </div>

            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                <img width={20} src={assets.lock_icon} alt="user" />
                <input type="text" className="outline-none text-sm" placeholder="Password" required 
                onChange={e=> setPassword(e.target.value)} value={password}/>
            </div>
            <p className="text-sm text-blue-600 my-4 cursor-pointer" 
            >Forgot Password?</p>

            <button className="bg-blue-600 w-full text-white py-2 rounded-full">{state === 'Login '?'login':'Create Account'}</button>

           {state==='Login' ? <p className="mt-5 text-center">Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>{setState('Sign Up')}}>Sign Up</span></p>   
           :         
            <p className="mt-5 text-center">Already have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>{setState('Login')}}>Login</span></p>}

            <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" className="absolute top-5 right-5 cursor-pointer" />
        </motion.form>
    </div>
  )

}
export default Login


// import React, { useContext, useEffect, useState } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [state, setState] = useState("Login");
//   const {setShowLogin, backendURL, setToken, setUser } = useContext(AppContext);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Move useEffect OUTSIDE of onSubmitHandler
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(backendURL)
//       let data;
//       if (state === "Login") {
//         const response = await axios.post(`${backendURL}/api/user/login`, { email, password });
//         data = response.data;
//       } else {
//         const response = await axios.post(`${backendURL}/api/user/register`, { name, email, password });
//         data = response.data;
//       }

//       if (data.success) {
//         console.log("data Success")
//         setToken(data.token);
//         setUser(data.user);
//         localStorage.setItem("token", data.token);
//         setShowLogin(false);
//         toast.success("Logged in successfully!");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
//       <motion.form
//         onSubmit={onSubmitHandler}
//         className="relative bg-white p-10 rounded-xl text-slate-500"
//         initial={{ opacity: 0.2, y: 50 }}
//         transition={{ duration: 0.3 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
//         <p>Welcome back! Please Sign in to continue</p>

//         {/* Show Name Field Only for Sign Up */}
//         {state !== "Login" && (
//           <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
//             <img width={30} src={assets.profile_icon} alt="user" />
//             <input type="text" className="outline-none text-sm" placeholder="Full Name" required onChange={(e) => setName(e.target.value)} value={name} />
//           </div>
//         )}

//         {/* Email Input */}
//         <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
//           <img width={25} src={assets.email_icon} alt="user" />
//           <input type="text" className="outline-none text-sm" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
//         </div>

//         {/* Password Input */}
//         <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
//           <img width={20} src={assets.lock_icon} alt="user" />
//           <input type="password" className="outline-none text-sm" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
//         </div>

//         <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password?</p>

//         {/* Submit Button */}
//         <button className="bg-blue-600 w-full text-white py-2 rounded-full">{state === "Login" ? "Login" : "Create Account"}</button>

//         {/* Toggle Login/Sign Up */}
//         {state === "Login" ? (
//           <p className="mt-5 text-center">
//             Don't have an account?{" "}
//             <span className="text-blue-600 cursor-pointer" onClick={() => setState("Sign Up")}>
//               Sign Up
//             </span>
//           </p>
//         ) : (
//           <p className="mt-5 text-center">
//             Already have an account?{" "}
//             <span className="text-blue-600 cursor-pointer" onClick={() => setState("Login")}>
//               Login
//             </span>
//           </p>
//         )}

//         {/* Close Button */}
//         <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" className="absolute top-5 right-5 cursor-pointer" />
//       </motion.form>
//     </div>
//   );
// };

// export default Login;

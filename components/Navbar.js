import { useState,useEffect } from "react";
import { navVariants } from "../constant/motion";
import { motion } from "framer-motion";

export default function Navbar(){

    const [menu, setMenu] = useState(true);
    useEffect(() => {
        let handler = (e) => {
            if(e.target) {
                setMenu(true)
            }
        };
        document.addEventListener("mousedown",handler);
        document.addEventListener("scroll",handler);
        return () => window.removeEventListener("scroll", handler);
    },[]);

    return (
        <motion.div 
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="top-0 fixed flex justify-between items-center px-6 py-4 w-[100%] bg-[#242324] z-20">
            <a href="#"><h1 className="logo font-bold text-3xl overflow-hidden text-[#ec8700] cursor-pointer">FITGROW</h1></a>
            <div className="gap-8 hidden lg:flex md:items-center">
                <a href="#products"><li className="text-xl text-[#ec8700] font-medium cursor-pointer hover:text-[#F4F8EB] hover:duration-700">Products</li></a>
                <a href="#merchandise"><li className="text-xl text-[#ec8700] font-medium cursor-pointer hover:text-[#F4F8EB] hover:duration-700">Merchandise</li></a>
                <a href="#tech"><li className="text-xl text-[#ec8700] font-medium cursor-pointer hover:text-[#F4F8EB] hover:duration-700">Technology</li></a>
                <a href="#signup"><button className="border-2 text-[#ec8700] border-[#ec8700] px-8 py-1 font-bold cursor-pointer hidden md:block hover:bg-[#ec8700] hover:text-white hover:duration-700">Become a Member</button></a>
            </div>
            <div className="flex items-center lg:hidden">
                <div onClick={() => {setMenu(!menu)}} className="absolute right-0 bg-[#ec8700] rounded-[50%] p-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7 text-white"><path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd"></path></svg>
                </div>
                <div className={`${menu ? `translate-x-[100%]` : `translate-x-0`} bg-[#F4F8EB] transition-all duration-1000 fixed w-[200px] h-screen top-0 right-0 bottom-0 lg:w-[300px]`}>
                    <div className={`h-[35px] w-[35px] p-2 rounded-[50%] border-[#ec8700] border-[1px] absolute top-4 right-8 lg:h-[35px] lg:w-[35px]`} onClick={()=>{setMenu(true)}}><img src="/close.svg" alt="close-icon"/></div>
                        <div className={`absolute top-16 left-6`}>
                            <a href="#products"><li className="text-4sm my-3 text-[#ec8700] font-medium cursor-pointer hover:opacity-70 hover:duration-700">Products</li></a>
                            <a href="#merchandise"><li className="text-4sm my-3 text-[#ec8700] font-medium cursor-pointer hover:opacity-70 hover:duration-700">Merchandise</li></a>
                            <a href="#tech"><li className="text-4sm my-3 text-[#ec8700] font-medium cursor-pointer hover:opacity-70 hover:duration-700">Technology</li></a>
                            <a href="#signup"><button className=" border-2 my-1 text-[#ffffff] bg-[#ec8700] border-[#ec8700] px-2 py-1 font-bold cursor-pointer hover:opacity-70 hover:text-white hover:duration-700">Become a Member</button></a>
                        </div>
                    </div>
                </div>
        </motion.div>
    )
};
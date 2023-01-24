import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { buttonVariant,buttonrightVariant } from "../constant/motion";

export default function Homebanner() {
    return (
        <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="relative py-20 w-[100%] overflow-hidden lg:py-16" id="#">
            <Navbar />
            <div className="flex flex-col w-[100%] justify-center items-center overflow-hidden sm:flex-row sm:top-[80px] md:top-[60px] md:px-20 lg:px-32">
                <motion.div variants={buttonVariant(0.8)}  className="flex-1 max-w-[400px] text-white mx-10">
                    <h1 className="heading text-4xl font-bold overflow-hidden mb-4 lg:text-6xl">Boost Your Power Now</h1>
                    <p className="text-sm lg:text-[15px]">Our spacious and light fitness suites have dedicated areas for cardio, fixed weights, free weights, functional training, plate-loaded machines, lifting racks and cable motion.</p>
                    <button className="mt-4 border-2 object-contain border-[#ec8700] py-2 px-6 text-[#ec8700] font-bold hover:bg-[#ec8700] hover:duration-700 hover:text-white">Read more</button>
                </motion.div> 
                <motion.img variants={buttonrightVariant(0.8)}  className="flex-1 max-h-[500px]" src="/banner-man.png" alt="home-banner" />
            </div>
            <img className="absolute z-[-1] inset-0 w-[100%] h-[100%]" src="/home-banner.png" alt="home-banner"/>
        </motion.div>
    )
};

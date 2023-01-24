import { merch } from "../constant/data";
import { motion } from "framer-motion";
import { staggerContainer,fadeIn } from "../constant/motion";

export default function Merchandise() {
    return (
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-[60px]" id="merchandise">
            <div className="max-w-[600px] mx-auto py-[60px]">
                <h1 className="text-center text-2xl sm:text-4xl font-bold mb-4 overflow-hidden">Explore The Newest Products</h1>
                <p className="text-xs text-center sm:text-sm">Make the most of your work outs with the help of our knowledgeable team. You can start with a fitness suite induction or jump straight to a personal fitness programme, taster sessions or one of our popular lifting workshops.</p>
            </div>   
            <div className="flex justify-center items-center text-center flex-wrap">
                {merch.map((item,index) => {
                    return(
                        <motion.div 
                            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                            className="mx-10" key={item.id}>
                            <img className="h-[270px] w-[240px] object-contain" src={item.url} alt="merch-image"/>
                            <h1 className="text-2xl font-bold my-2 md:my-4">{item.heading}</h1>
                            <button className="text-white bg-[#ec8700] py-1 px-4 text-sm font-bold hover:opacity-70 hover:duration-700">View All Collection</button>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
} 
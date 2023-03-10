import { products } from "../constant/data";
import { motion } from "framer-motion";
import { fadeIn,staggerContainer } from "../constant/motion";
import useWindowSize from "./windowsize";

export default function Products(){
    const { width } = useWindowSize();
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="relative" id="products">
            <div className="flex z-10 justify-center py-[90px] items-center flex-wrap overflow-auto lg:px-[20px]">
                {products.map((product,index) => {
                    return(
                        <div key={product.id}>
                            { width<950 && width>480 ? 
                            <>
                            {
                                <div key={product.id} className="flex h-[300px] w-[500px] mx-2 my-3 p-4 bg-black text-white overflow-hidden md:m-4 md:w-[450px]">
                                    <div className="flex-1 overflow-hidden">
                                        <h1 className="text-2xl font-bold mb-4 text-[#ec8700]">{product.title}</h1>
                                        <p className="text-sm mb-4">{product.description}</p>
                                        <button className="text-white bg-[#ec8700] py-1 px-4 text-sm font-bold hover:opacity-70 hover:duration-700">Read more</button>
                                    </div>
                                    <div className="models flex-1 overflow-hidden">
                                        <img className="object-fill max-h-[300px] max-w-[300px]" src={product.url} alt="athletes" />
                                    </div>
                                </div>
                            }
                            </>
                            :
                            <>
                                {
                                <motion.div 
                                variants={fadeIn('right', 'spring', index * 0.5, 0.75)} key={product.id} className="flex h-[300px] max-w-[500px] mx-2 my-3 p-4 bg-black text-white overflow-hidden md:m-4 md:w-[450px]">
                                    <div className="flex-1 overflow-hidden">
                                        <h1 className="text-2xl font-bold mb-4 text-[#ec8700]">{product.title}</h1>
                                        <p className="text-sm mb-4">{product.description}</p>
                                        <button className="text-white bg-[#ec8700] py-1 px-4 text-sm font-bold hover:opacity-70 hover:duration-700">Read more</button>
                                    </div>
                                    <div className="models flex-1 overflow-hidden">
                                        <img className="object-fill max-h-[300px] max-w-[300px]" src={product.url} alt="athletes" />
                                    </div>
                                </motion.div>
                                }
                            </>
                            }
                            
                        </div>
                    )
                })}
            </div>
            <img className="absolute z-[-1] inset-0 w-[100%] h-[100%]" src="/product-banner.png" alt="product"/>
        </motion.div>
    )
};
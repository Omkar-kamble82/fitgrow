import { motion } from "framer-motion";
import { buttonVariant,buttonrightVariant } from "../constant/motion";

export default function Technology() {
    return(
        <div>

            <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex relative justify-center items-center flex-col px-8 sm:flex-row lg:px-16" id="tech">
                <motion.div variants={buttonVariant(0.8)} className="flex-1">
                    <h1 className="text-2xl font-bold sm:text-4xl overflow-hidden py-4">The latest in fitness technology</h1>
                    <p className="my-1 text-sm">Our fitness suites feature the hottest new equipment out at the moment, including a SYNRGY360 training area, WLinear training rig, Watt bikes and the latest cardio equipment from Life Fitness - all connected by the LFconnect app to track your work outs. </p>
                    <p className="my-1 text-sm">Our spacious and light fitness suites have dedicated areas for cardio, fixed weights, free weights, functional training, plate-loaded machines, lifting racks and cable motion.</p>
                    <button className="text-white bg-[#ec8700] mt-4 py-2 px-4 text-sm font-bold hover:opacity-70 hover:duration-700">Read more</button>
                </motion.div>
                <motion.img variants={buttonrightVariant(0.8)} className="flex-1" src="/usain-bolt.png" alt="usain-bolt" />
                <img className="absolute z-[-1] w-[100%] h-[100%]" src="/tech-banner-1.png" alt="tech-banner" />
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex relative justify-center items-center flex-col px-8 sm:flex-row-reverse lg:px-16">
                <motion.div variants={buttonrightVariant(0.8)} className="flex-1 sm:text-right">
                    <h1 className="text-2xl font-bold sm:text-4xl overflow-hidden py-4">Our fitness instructors are here to support</h1>
                    <p className="my-1 text-sm">Make the most of your work outs with the help of our knowledgeable team. You can start with a fitness suite induction or jump straight to a personal fitness programme, taster sessions or one of our popular lifting workshops. Our fitness instructors have a huge range of expertise to support you to reach your goals!</p>
                    <button className="text-white bg-[#000] mt-4 py-2 px-4 text-sm font-bold hover:opacity-70 hover:duration-700">Read more</button>
                </motion.div>
                <motion.img variants={buttonVariant(0.8)} className="flex-1 h-[600px] object-contain" src="/instructure.png" alt="instructure" />
                <img className="absolute z-[-1] w-[100%] h-[100%]" src="/tech-banner-2.png" alt="tech-banner" />
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex justify-center items-center flex-col px-8 py-14 sm:flex-row lg:px-16" id="signup">
                <motion.div variants={buttonVariant(0.8)} className="flex-1 mr-4">
                    <h1 className="text-2xl font-bold sm:text-4xl overflow-hidden py-4 mb-8"><span className="text-[#ec8700]">JOIN NOW</span> TO GET IN SHAPE</h1>
                    <input className="bg-[#ec8700] placeholder-white font-bold rounded-xl px-4 h-[40px] w-[100%]" placeholder="Name..."/>
                    <input className="bg-[#ec8700] placeholder-white font-bold rounded-xl px-4 h-[40px] my-8 w-[100%]" placeholder="Email..."/>
                    <textarea rows="5" cols="33" className="bg-[#ec8700] placeholder-white font-bold mb-10 rounded-xl px-4 w-[100%] py-4" placeholder="Message..."></textarea>
                </motion.div>
                <motion.img variants={buttonrightVariant(0.8)} className="flex-1 object-contain h-[500px] rounded-xl" src="/form.png" alt="form-img" />
            </motion.div>

        </div>
    )
}
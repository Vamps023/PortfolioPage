import { motion } from 'framer-motion';
import { styles } from '../styles';
import { BuggyCanvas } from './canvas';

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto grid grid-cols-2`}>
            <div className={`col-span-2 sm:col-span-1 flex flex-col justify-center items-start gap-5 p-10`}>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white font-poppins uppercase`}>
                        Hi, I'm{' '}
                        <span className="sm:text-battleGray sm:text-[90px] text-white text-[50px] font-mova font-extrabold uppercase">
                            Swapnil
                        </span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white`}>
                        I am a 3D Artist with over three years of experience working in the VFX and game industry.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#ffffff] sm:hidden" />
                    <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
                </div>
            </div>

            <div className="hidden xs:col-span-2 sm:col-span-1 sm:flex justify-center items-center">
                <BuggyCanvas/>
            </div>
            
            <div
                className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div
                        className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-taupe mb-1"
                        />
                    </div>
                </a>
            </div>


        </section>
    );
};

export default Hero;

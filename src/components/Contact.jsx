import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75]  p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadTextLight}`}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <p className="text-white font-medium">
            LinkedIn: <a href="https://www.linkedin.com/in/swapnilnare/" target="_blank" rel="noopener noreferrer"> Swapnil Nare</a>
          </p>
          <p className="text-white font-medium">
            Gmail: <a href="mailto:swapnilnare007@gmail.com.com">swapnilnare007@gmail.com</a>
          </p>
          <p className="text-white font-medium">
            Mobile: +91 8766569006
          </p>
          <p className="text-white font-medium">
            ArtStation: <a href="https://www.artstation.com/vamps23" target="_blank" rel="noopener noreferrer">Swapnil Nare</a>
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

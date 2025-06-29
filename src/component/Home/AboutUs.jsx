import { motion, useInView } from "framer-motion";
import about from "../../assets/about.png";
import { useRef } from "react";
const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section className="xl:max-w-10/12 max-lg:container mx-auto my-24 mt-12 p-6 rounded flex flex-col lg:flex-row xl:gap-20 lg:gap-10 gap-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-shrink-0 lg:flex-shrink-1/2 relative"
      >
        <img
          src={about}
          alt="About Us"
          className="z-1 p-0 shadow xl:w-full md:w-10/12 w-11/12"
        />
        <div className="xl:w-full lg:w-10/12 md:w-10/12 w-11/12 h-full lg:h-[calc(100%-48px)] bg-main absolute -z-1 left-6 top-6 rounded-xl"></div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 200 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-auto"
      >
        <h3 className="text-2xl text-black/60 font-medium mb-4">
          About Us &mdash;
        </h3>
        <h3 className="text-4xl text-black/80 font-bold mb-4">
          Study. Collaborate. Grow Together.
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to StudyHive, the ultimate online platform for collaborative
          learning! Our mission is to bring students together in a friendly
          digital space where they can study, share, and succeed — together.
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
          <li className="mb-2"> Collaborative Learning</li>
          <li className="mb-2">Assignment Management</li>
          <li className="mb-2">Progress Tracking</li>
          <li className="mb-2">User-Friendly Interface</li>
        </ul>
        <button className="btn btn-xl bg-main text-white px-6 py-2 rounded hover:bg-main/80 transition duration-300 ">
          Join Us Now
        </button>
      </motion.div>
    </section>
  );
};

export default AboutUs;

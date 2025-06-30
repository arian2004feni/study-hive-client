import banner from "../../assets/hero.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header>
      <div
        className="hero min-h-[650px] h-[calc(100vh-72px)]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-heading/90"></div>
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-content p-8 xl:max-w-10/12 max-lg:container mx-auto font-body text-neutral-content"
        >
          <div className="max-w-5xl">
            <h1 className="mb-5 md:text-xl">Together, Grow Faster &mdash;</h1>
            <p className="mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Study sessions just got real. Assign, complete, and review with
              friends.
            </p>
            <button className="btn btn-primary bg-[#fdcd33] hover:bg-main text-heading">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;

import { motion, useInView } from "framer-motion";
import man from "./../../assets/college-guy.png";
import { useRef } from "react";

const NewsLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section className="flex flex-col lg:flex-row xl:max-w-10/12 max-lg:container mx-auto my-16 gap-8 p-6 rounded-lg">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex bg-heading/90 text-white pl-8 rounded"
      >
        <div className="font-body my-auto pt-8">
          <h3 className="font-bold text-3xl mb-4">
            Built by Students, for Students
          </h3>
          <p className="text-lg mb-6">
            We built this app with one goal in mind: make group study fun,
            productive, and meaningful. Whether it's sharing assignments, or
            grading each other's.
          </p>
        </div>
        <div className="flex-shrink-0 lg:w-52 md:w-72 sm:w-64 w-52 relative">
          <img
            src={man}
            alt="man"
            className="lg:h-72 md:h-72 sm:h-80 bottom-0 left-0 absolute"
          />
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 200 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex flex-col justify-center bg-main text-heading p-8 rounded"
      >
        <div className="font-body">
          <h3 className="font-bold text-3xl mb-4">
            More Than Just Assignments
          </h3>
          <p className="text-lg mb-6">
            Join our community of learners and stay updated with the latest
            features, tips, and resources.
          </p>
        </div>
        <form
          className="flex bg-white rounded-lg p-4 py-2 pr-2 justify-between max-sm:flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="join w-full">
            <input
              type="text"
              className="input border-none focus:outline-none focus:shadow-none input-lg w-full join-item"
              placeholder="Email Address"
            />
            <button className="btn bg-heading rounded-lg text-white btn-xl join-item text-lg">
              Subscribe
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default NewsLetter;

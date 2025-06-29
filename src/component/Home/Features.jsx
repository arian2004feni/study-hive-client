import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaListCheck } from "react-icons/fa6";
import { GiFiles } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { SiWikibooks } from "react-icons/si";
import { TbDeviceAnalytics, TbDeviceMobileCheck } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section className="lg:max-w-10/12 max-lg:container mx-auto my-16 rounded-lg z-10 transform -translate-y-28 bg-white shadow-lg pt-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h3 className="uppercase text-center text-xl text-heading font-medium mb-4">
          &mdash; Features &mdash;
        </h3>
        <h1 className="text-center text-4xl font-bold text-heading mb-8">
          An exemplary learning community
        </h1>
        <div className="grid max-[510px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-6 lg:gap-0 md:gap-6 sm:gap-0 gap-6 p-6">
          <div className="card card_hover">
            <div className="card-body">
              <AiOutlineUsergroupAdd className="text-5xl text-main mb-4" />
              <h2 className="card-title">Collaborative Learning</h2>
              <p>
                Engage in group study sessions, share resources, and learn
                together with friends.
              </p>
            </div>
          </div>

          <div className="card card_hover">
            <div className="card-body">
              <SiWikibooks className="text-5xl text-main mb-4" />
              <h2 className="card-title">Assignment Management</h2>
              <p>
                Create, assign, and track assignments effortlessly. Stay
                organized and on top of your tasks.
              </p>
            </div>
          </div>

          <div className="card card_hover">
            <div className="card-body">
              <FaListCheck className="text-5xl text-main mb-4" />
              <h2 className="card-title">Progress Tracking</h2>
              <p>
                Monitor your learning progress and achievements. Get insights
                into your study habits.
              </p>
            </div>
          </div>

          <div className="card card_hover">
            <div className="card-body">
              <TbDeviceAnalytics className="text-5xl text-main mb-4" />
              <h2 className="card-title">User-Friendly Interface</h2>
              <p>
                Enjoy a clean and intuitive interface that makes learning and
                collaboration seamless.
              </p>
            </div>
          </div>

          <div className="card card_hover">
            <div className="card-body">
              <MdOutlineSecurity className="text-5xl text-main mb-4" />
              <h2 className="card-title">Secure & Private</h2>
              <p>
                Your data is safe with us. We prioritize your privacy and
                security in all interactions.
              </p>
            </div>
          </div>

          <div className="card card_hover">
            <div className="card-body">
              <TbDeviceMobileCheck className="text-5xl text-main mb-4" />
              <h2 className="card-title">Mobile Friendly</h2>
              <p>
                Access your study materials and assignments on the go. Our
                platform is optimized for mobile devices.
              </p>
            </div>
          </div>

          <div className="card card_hover">
            <div className="card-body">
              <TfiWorld className="text-5xl text-main mb-4" />
              <h2 className="card-title">Community Support</h2>
              <p>
                Join a vibrant community of learners. Share knowledge, ask
                questions, and get support from peers.
              </p>
            </div>
          </div>

          <div className="card card_hover">
            <div className="card-body">
              <GiFiles className="text-5xl text-main mb-4" />
              <h2 className="card-title">Resource Sharing</h2>
              <p>
                Share and access a wide range of study materials, notes, and
                resources with your peers.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;

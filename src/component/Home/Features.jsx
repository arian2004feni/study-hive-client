import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaListCheck } from "react-icons/fa6";
import { GiFiles } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { SiWikibooks } from "react-icons/si";
import { TbDeviceAnalytics, TbDeviceMobileCheck } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";

const Features = () => {
  return (
    <section className="container mx-auto my-16 rounded-lg z-10">
      <h3 className="uppercase text-center text-5xl text-black/80 font-medium mb-4">
        {" "}
        Features{" "}
      </h3>
      <h1 className="text-center">
        &mdash; An exemplary learning community &mdash;
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

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
              Create, assign, and track assignments effortlessly. Stay organized
              and on top of your tasks.
            </p>
          </div>
        </div>

        <div className="card card_hover">
          <div className="card-body">
            <FaListCheck className="text-5xl text-main mb-4" />
            <h2 className="card-title">Progress Tracking</h2>
            <p>
              Monitor your learning progress and achievements. Get insights into
              your study habits.
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
              Your data is safe with us. We prioritize your privacy and security
              in all interactions.
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
    </section>
  );
};

export default Features;

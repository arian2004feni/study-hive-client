import React from "react";
import about from "../../assets/about.png";
import { FaCheck } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <section className="container mx-auto my-24 p-6 rounded flex flex-col lg:flex-row gap-20">
      <div className="flex-shrink-0 relative">
        <img src={about} alt="About Us" className="z-1 p-0 shadow" />
        <div className="w-full h-[calc(100%-48px)] bg-main absolute -z-1 left-6 top-6 rounded"></div>
      </div>
      <div className="my-auto">
        <h3 className="text-2xl text-black/60 font-medium mb-4">
          About Us &mdash;
        </h3>
        <h3 className="text-4xl text-black/80 font-bold mb-4">
          Study. Collaborate. Grow Together.
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to StudyHive, the ultimate online platform for collaborative
          learning! We believe that education is most effective when shared
          among peers. Our mission is to bring students together in a friendly
          digital space where they can study, share, and succeed — together.
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
          <li className="mb-2">
            {" "}
            Collaborative Learning: Engage in group study sessions, share
            resources, and learn together with friends.
          </li>
          <li className="mb-2">
            Assignment Management: Create, assign, and track assignments
            effortlessly. Stay organized and on top of your tasks.
          </li>
          <li className="mb-2">
            Progress Tracking: Monitor your learning progress and achievements.
            Get insights into your study habits.
          </li>
          <li className="mb-2">
            User-Friendly Interface: Enjoy a clean and intuitive interface that
            makes learning and collaboration seamless.
          </li>
        </ul>
        <button className="btn btn-xl bg-main text-white px-6 py-2 rounded hover:bg-main/80 transition duration-300 mt-6">
          Join Us Now
        </button>
      </div>
    </section>
  );
};

export default AboutUs;

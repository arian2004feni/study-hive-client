import React from "react";
import banner from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <header>
      <div
        className="hero min-h-[calc(100vh-72px)]"
        style={{
          backgroundImage:
            `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-slate-950/80"></div>
        <div className="hero-content font-body text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-xl">Together, Grow Faster &mdash;</h1>
            <p className="mb-5 text-5xl font-bold">
              Study sessions just got real. Assign, complete, and review with friends.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

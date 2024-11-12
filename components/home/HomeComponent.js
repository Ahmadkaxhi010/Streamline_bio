"use client";

import React, { useEffect, useState, useRef } from "react";
import MuxVideo from "@mux/mux-video-react";
import MainHeader from "@/components/headers/MainHeader";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeComponent = () => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const secondSectionRef = useRef(null);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail && !isEmailValid(inputEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleJoinWaitlist = async () => {
    console.log("Joining waitlist", { email, companyName });
    setIsLoading(true);
    const response = await fetch("/api/email/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        email,
        companyName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
    }
    if (data.success) {
      setIsLoading(false);
      setEmail("");
      setCompanyName("");
    }
  };

  const handleScrollToSection = () => {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isButtonEnabled = companyName && email && isEmailValid(email);

  return (
    <>
      <MainHeader />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <MuxVideo
          src="https://yyqspdpk0yebvddv.public.blob.vercel-storage.com/clean-39o8OfAaGNk7uf8anSbIapYPE9LP92.mp4"
          type="video/mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-8 bg-black bg-opacity-50">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Streamlining CGT Manufacturing
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-8">
            Making cell and gene therapy (CGT) accessible to all patients in
            need, in time
          </p>
          <button
            onClick={handleScrollToSection}
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600"
          >
            See how it works
          </button>
        </div>
      </section>

      {/* Animated Second Section */}
      <section
        ref={secondSectionRef}
        className="relative w-full h-screen overflow-hidden"
        data-aos="fade-up"
      >
        <MuxVideo
          src="https://yyqspdpk0yebvddv.public.blob.vercel-storage.com/bgvid2-62kif4jOmNHfz57PXAuW8jK9se2UfG.mp4"
          type="video/mp4"
          className="relative w-full h-full object-cover z-10"
          autoPlay
          loop
          muted
        />
      </section>

      {/* Value Proposition Section */}
      <section
        className="py-24 px-8 bg-gray-100 text-gray-800 text-center md:flex md:flex-col md:gap-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Our Value Proposition
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="w-full md:w-1/3">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Efficiency
            </h3>
            <p>Increase production lines per cleanroom and operating profit.</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Scalability
            </h3>
            <p>Ramp up or down production capacity with ease.</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Simplicity
            </h3>
            <p>
              A plug-and-play solution with minimal change to existing
              processes.
            </p>
          </div>
        </div>
      </section>

      {/* New Lab Setup Section */}
      <section
        className="py-24 px-8 bg-white text-gray-800 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Lab Setup and Equipment
        </h2>
        <p className="text-lg mb-8">
          Explore our lab setups and equipment in detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image */}
          <div className="flex flex-col items-center">
            <img
              src="/images/home1.png"
              alt="Lab Setup with Prodigy, Incubator, Lab Fridge, BSC, and LOVO"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-lg mt-4">
              Lab setup with Prodigy, Incubator, Lab Fridge, BSC, and LOVO
            </p>
          </div>

          {/* Second Image */}
          <div className="flex flex-col items-center">
            <img
              src="/images/home2.png" // Replace with actual path
              alt="Lab Setup with Quantum, Xuri, LOVO, Prodigy, and Robotic Arm"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-lg mt-4">
              Lab setup with Quantum, Xuri, LOVO, Prodigy, and Robotic Arm
            </p>
          </div>
        </div>
      </section>

      {/* Join Waitlist Section */}
      <section
        className="py-24 px-8 bg-gray-100 text-gray-800 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Join the Waitlist
        </h2>
        <p className="text-lg mb-8">
          Be the first to experience our AI-driven automation solution.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border border-gray-300 p-3 rounded-md w-full md:w-1/4"
          />
          <div className="flex flex-col w-full md:w-1/4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300 p-3 rounded-md"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <button
            onClick={handleJoinWaitlist}
            disabled={!isButtonEnabled} // Disable button if fields are empty or email is invalid
            className={`${
              !isButtonEnabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } text-white px-6 py-3 rounded-md font-semibold`}
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </button>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        className="py-24 px-8 bg-white text-gray-800 text-center md:flex md:flex-col md:gap-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Key Features</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="w-full md:w-1/4">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Plug-and-Play
            </h3>
            <p>Seamlessly integrates with existing production lines.</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Robotic Precision
            </h3>
            <p>AI-powered robotics mimic human operators actions.</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Scalability
            </h3>
            <p>Action-centered automation for unique processes.</p>
          </div>
        </div>
      </section>

      {/* Automated Unit Operations Section */}
      <section
        className="py-24 px-8 bg-gray-100 text-gray-800 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Automated Unit Operations
        </h2>
        <img
          src="/images/home3.gif" // Replace with actual path
          alt="Lab Setup with Quantum, Xuri, LOVO, Prodigy, and Robotic Arm"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <MuxVideo
            src="/videos/take_bag.mp4"
            type="video/mp4"
            className="w-full"
            autoPlay
            loop
            muted
          />
          <MuxVideo
            src="/videos/rub_tube.mp4"
            type="video/mp4"
            className="w-full"
            autoPlay
            loop
            muted
          />
          <MuxVideo
            src="/videos/sampling_squeeze.mp4"
            type="video/mp4"
            className="w-full"
            autoPlay
            loop
            muted
          />
          <MuxVideo
            src="/videos/insert_tube.mp4"
            type="video/mp4"
            className="w-full"
            autoPlay
            loop
            muted
          />
        </div> */}
      </section>
    </>
  );
};

export default HomeComponent;

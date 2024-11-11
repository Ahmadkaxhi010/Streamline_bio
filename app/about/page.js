// pages/about.js
import MuxVideo from "@mux/mux-video-react";
import FoundersComp from "@/components/Leadership/FoundersComp";
import KeyHires from "@/components/Leadership/KeyHires";
import Advisors from "@/components/Leadership/Advisors";
import Footer from "@/components/footer/Footer";
export default function AboutPage() {
  return (
    <>
    <section>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <MuxVideo
          src="/images/bgvid.mp4"
          type="video/mp4"
          className=" relative w-full h-full object-cover z-10"
          autoPlay
          loop
          muted
        />

        {/* Overlay Text */}
        <div className=" absolute z-20 top-0 left-0 text-white p-8 bg-transparent flex items-center justify-between min-w-full min-h-screen">
          <h1 className="text-5xl font-bold mb-4 bg-transparent">About</h1>
          <p className="text-xl max-w-xl bg-transparent text-justify">
            We’re an AI and robotics company, with roots in Norway and Silicon
            Valley. Our team is building a world where you do more of what you
            love, while your humanoid companions handle the rest.
          </p>
        </div>
      </div>
    </section>
    <FoundersComp />
    <Advisors />
    <KeyHires />  
    <Footer />
    </>
  );
}

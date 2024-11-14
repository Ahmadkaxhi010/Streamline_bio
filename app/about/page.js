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
            // src="https://yyqspdpk0yebvddv.public.blob.vercel-storage.com/bgvid2-62kif4jOmNHfz57PXAuW8jK9se2UfG.mp4"
            src="/images/AI-driven.mp4"
            type="video/mp4"
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          />

          {/* Overlay Text */}
          <div className="absolute z-20 inset-0 text-white p-4 md:p-8 bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">About</h1>
            <p className="text-sm md:text-xl max-w-xl text-center md:text-justify">
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

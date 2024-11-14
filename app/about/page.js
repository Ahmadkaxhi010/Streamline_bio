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
            src="/images/about.mp4"
            type="video/mp4"
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          />

          {/* Overlay Text */}
          <div className="absolute z-20 inset-0 text-white p-4 md:p-8 bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">About</h1>
            <p className="text-xs md:text-lg max-w-2xl text-center md:text-justify">
              Streamline Bio is solving critical challenges in cell and gene
              therapy (CGT) manufacturing process to make CGT accessible to
              patients in need. 𝗜𝗻 𝗖𝗚𝗧, end-to-end 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗼𝗻 𝗶𝘀 𝗼𝗳𝘁𝗲𝗻 𝗵𝗮𝗶𝗹𝗲𝗱 𝗮𝘀
              𝘁𝗵𝗲 “𝗵𝗼𝗹𝘆 𝗴𝗿𝗮𝗶𝗹”, the solution to all the manufacturing problems
              and bottlenecks. However, CGT processes are inherently complex,
              multi-step, and notoriously variable; this makes it extremely
              difficult to develop an one-size-fits-all automation solution.
              That’s where we come in. Streamline Bio offers an AI-driven
              robotics platform that not only automates but is designed to be
              flexible, machine-agnostic, and fully digital-native.
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

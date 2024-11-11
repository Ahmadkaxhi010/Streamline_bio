import Image from "next/image";
const FoundersComp = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-2xl md:text-5xl">Meet Our Team</h1>
      </div>
      <div className="flex flex-col-reverse ml-6 mr-6 md:flex-row bg-white">
        <div className="md:w-1/2 p-6 flex items-center">
          <div className="text-left">
            <span className="text-indigo-600 font-semibold text-lg">
              Co-Founder, CEO
            </span>
            <h3 className="text-purple-600 text-2xl font-bold mt-2 mb-4">
              Dr. Yu-Shun (LEO) Hsiao, PhD
            </h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed mb-4">
              <li>
                Harvard PhD in computer science, focusing on AI and robotics
                systems
              </li>
              <li>
                Prior NVIDIA PhD research intern, joint research with NVIDIA
                robotics, autonomous vehicles, and architecture research teams
              </li>
              <li>10+ publications and patents in AI and robotics</li>
            </ul>
            <div className="flex items-center mt-4">
              <Image
                src="/images/Harvard.png"
                alt="Harvard Logo"
                width={100}
                height={40}
              />
              <Image
                src="/images/nvidia.png"
                alt="NVIDIA Logo"
                width={100}
                height={40}
                className="ml-4"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center p-6">
          <div>
            <Image
              src="/images/c11.png"
              alt="Arel Lidow"
              width={1080}
              height={1080}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row bg-[#f7f7f7]">
        <div className="md:w-1/2 flex justify-center items-center p-6">
          <div>
            <Image
              src="/images/c12t.png"
              alt="Arel Lidow"
              width={1080}
              height={1080}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-6 flex items-center">
          <div className="text-left">
            <span className="text-indigo-600 font-semibold text-lg">
              Co-Founder, President
            </span>
            <h3 className="text-purple-600 text-2xl font-bold mt-2 mb-4">
              Dr. Yen-Po (Harvey) Chin, MD, PhD
            </h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed mb-4">
              <li>
                Former McKinsey consultant focusing on life science commercial
                strategy, with a special focus on CGT biotech and CDMO
              </li>
              <li>
                PHarvard healthtech innovation fellow focusing on business
                strategy
              </li>
              <li>
                Clinical doctor + PhD in biomedical informatics + Forbes 30
                under 30 Asia awarded serial entrepreneur
              </li>
            </ul>
            <div className="flex items-center mt-4">
              <Image
                src="/images/Harvard.png"
                alt="Harvard Logo"
                width={100}
                height={40}
              />
              <Image
                src="/images/mc.png"
                alt="NVIDIA Logo"
                width={150}
                height={40}
                className="ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundersComp;

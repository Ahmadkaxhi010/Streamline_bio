import Image from "next/image";

const KeyHires = () => {
  const teamMembers = [
    {
      name: "Cole Wu",
      title: "Key Hires",
      image: "/images/c12t.png", // Replace with actual path
      description:
        "Cole Wu, Senior Automation engineer, Led a 7M dollars factory automation project.",
    },
    {
      name: "Melvin Liu",
      title: "Key Hires",
      image: "/images/c12t.png", // Replace with actual path
      description:
        "Melvin Liu, Senior Mechanical engineer, 6 years of experience in mechanical design",
    },
    {
      name: "Larry Huang",
      title: "Key Hires",
      image: "/images/c12t.png", // Replace with actual path
      description:
        "Larry Huang, Senior Software engineer, 6 years of experience in software infrastructure.",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center mt-10 mb-6">
        <h1 className="text-2xl font-bold md:text-5xl">Strong Key Hires</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 md:flex md:flex-row md:justify-center md:items-center md:gap-8 p-6 bg-white">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center w-44 h-44 group rounded-3xl overflow-hidden bg-[#f7f7f7] p-4"
          >
            <div className="flex flex-col justify-center items-center text-center">
              {/* <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div> */}
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="text-indigo-600">{member.title}</p>
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default KeyHires;

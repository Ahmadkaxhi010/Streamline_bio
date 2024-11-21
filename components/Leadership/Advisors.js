import Image from "next/image";

const Advisors = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-2xl font-bold md:text-5xl">
          Key Strategic Advisors
        </h1>
      </div>
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {/* Card for Dr. Dolores Baksh */}
          <div className="bg-white shadow-2xl rounded-lg p-6 flex flex-col items-center">
            <Image
              src="/images/Dolores.png" // Replace with actual image path
              alt="Dr. Dolores Baksh"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-purple-600">
              Dr. Dolores Baksh, PhD
            </h2>
            <ul className="text-gray-700 text-sm mt-4 list-disc ml-8 space-y-2">
              <li>CEO Hyperius Biotech</li>
              <li>
                25+ years in Regen Med / CGT: Expertise in R&D, preclinical, PD,
                operations/CMC, commercial
              </li>
              <li>
                Strategic Leadership: Led global Life Sciences growth
                initiatives
              </li>
              <li>
                BD&L & Sales: Closed multi-$MM deals, multi-year collaborations
                (Pharma/Biotech)
              </li>
              <li>
                Product/Company Launches: In CGT sector (tech and therapy)
              </li>
              <li>
                Financial Management, Diligence & Acquisitions: Oversaw $MM P&L,
                closed deals
              </li>
            </ul>
            {/* <div className="flex mt-2 space-x-4">
              <Image
                src="/images/TAAV.jpeg" // Replace with actual logo path
                alt="TAAV Logo"
                width={100}
                height={40}
              />
              <Image
                src="/images/cytiva.svg" // Replace with actual logo path
                alt="Cytiva Logo"
                width={100}
                height={40}
              />
            </div> */}
          </div>

          {/* Card for Dr. Rodney Rietze */}
          <div className="bg-white shadow-2xl rounded-lg p-6 flex flex-col items-center">
            <Image
              src="/images/Rod.png" // Replace with actual image path
              alt="Dr. Rodney Rietze"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-purple-600">
              Dr. Rodney Rietze, PhD
            </h2>
            <ul className="text-gray-700 text-sm mt-4 ml-6 list-disc space-y-2">
              <li>Co-founder/CEO, iVexSol, 2018</li>
              <li>25+ years in Regen Med + CGT</li>
              <li>
                Co-founder, Principal Investigator - Academia Center of
                Excellence: Queensland Brain Institute
              </li>
              <li>
                Discovery science/Clinical Trials: drug screening, cell
                therapies
              </li>
              <li>Tech Transfer, Commercial Launch: Kymriah, T-Charge</li>
              <li>
                Fund Raising: $116M+ capital from various sources: Strategics,
                Venture, PE, HNW investors
              </li>
            </ul>
            {/* <div className="flex mt-12 space-x-4">
              <Image
                src="/images/nova.png" // Replace with actual logo path
                alt="Novartis Logo"
                width={220}
                height={40}
              />
              <Image
                src="/images/pfiz.png" // Replace with actual logo path
                alt="Pfizer Logo"
                width={100}
                height={40}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Advisors;

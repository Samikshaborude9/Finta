import React from "react";
import Container from "./Container";
import TaskProgress from "./TaskProgress";
import Image from "next/image";
import alex from "../public/alex.png";

import Tax from "../public/tax.png";
import claim from "../public/claim.png";
import filinghandled from "../public/filinghandled.png";

const TaxSeason = () => {
  return (
    <section className="py-24">
      <Container>
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-semibold mb-4 tracking-tight">
            Tax season with{" "}
            <span className="text-blue-600">zero stress</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert tax prep, filing, and dedicated support for year-round peace
            of mind.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* VISUAL ROW */}
  <div className="flex justify-center">
    <TaskProgress />
  </div>

  <div className="flex justify-center -mt-20">
    <Image
      src={Tax}
      alt="tax season"
      width={450}
      height={450}
    />
  </div>

  {/* CAPTION ROW */}
  <div className="text-center max-w-sm mx-auto">
    <div className="flex items-center justify-center gap-2 mb-2 text-sm font-semibold text-blue-700 uppercase tracking-wide">
      <Image src={filinghandled} alt="filing handled" width={18} height={18} />
      All filing handled
    </div>

    <p className="text-gray-600">
      Finta’s experts handle all your filing and compliance needs accurately and
      on time.
    </p>
  </div>

  <div className="text-center max-w-sm mx-auto">
    <div className="flex items-center justify-center gap-2 mb-2 text-sm font-semibold text-blue-700 uppercase tracking-wide">
      <Image src={claim} alt="claim" width={18} height={18} />
      Claim R&D tax credits
    </div>

    <p className="text-gray-600">
      Finta’s experts help you maximize R&D tax credits and get money back from
      the IRS.
    </p>
  </div>
</div>
 <div>
    <div className="mt-16 text-center font-semibold text-4xl max-w-4xl mx-auto">
      “Finta filed our taxes and claimed $17,016 in credits. The process was easy with responsive support!”


    </div>
    <div className="max-w-4xl mx-auto mt-4 px-2 flex items-center justify-center">
      <Image 
      src={alex} 
      alt="alex"
      width={40}
      height={40}
      className="rounded-full"
      />
      <div className="gap-1 text-left ml-3">
        Alex Danilowicz

        <div className="text-sm text-gray-500">
          Co-founder at Magic Patterns


      </div>
    </div>
    </div>

    </div>

      </Container>
    </section>
  );
};

export default TaxSeason;

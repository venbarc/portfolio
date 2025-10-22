import BeyondCoding from "./components/beyondCoding/BeyondCoding";
import Experience from "./components/experience/Experience";
import HeadStart from "./components/headStart/HeadStart";
import Resume from "./components/resume/Resume";
import TechStacks from "./components/techStacks/TechStacks";
import OtherStacks from "./components/otherStacks/OtherStacks";

export default function Home() {
  return (
    <div className="container mx-auto mb-[5%]">
      <div className="mx-[3%] sm:mx-[22%]"> 
        <HeadStart />

        {/* Main Layout */}
        <div className="flex flex-col sm:flex-row gap-2 items-start mt-4 w-full">
          
          {/* left Column - 40% */}
          <div className="w-full sm:w-[40%] gap-3">
            <div>
              <BeyondCoding />
            </div>
              <Resume />              
            <div>
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="w-full sm:w-[60%]">
            <Experience />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 items-start mt-2 w-full">
          {/* Left Column - 60% */}
          <div className="w-full sm:w-[50%]">
              <TechStacks />
          </div>

          {/* Right Column - 40% */}
          <div className="w-full sm:w-[50%] gap-2">
            <div>
              <OtherStacks/>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

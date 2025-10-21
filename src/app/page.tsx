import BeyondCoding from "./components/beyondCoding/BeyondCoding";
import Experience from "./components/experience/Experience";
import HeadStart from "./components/headStart/HeadStart";
import Resume from "./components/resume/Resume";
import TechStack from "./components/TechStacks/TechStacks";

export default function Home() {
  return (
    <div className="container mx-auto mt-[1%] ">
      <div className="mx-[3%] sm:mx-[22%]"> 
        <HeadStart />

          {/* Flexbox alternative that definitely respects margins */}
          <div className="flex flex-col sm:flex-row gap-3 items-start mt-6 w-full">
            {/* Left Column - 60% */}
            <div className="w-full sm:w-[60%]">
              <Experience />
            </div>

            {/* Right Column - 40% */}
            <div className="w-full sm:w-[40%] grid grid-rows-[auto_auto] gap-3">
              <div>
                <BeyondCoding />
              </div>
              <div>
                <Resume />              
              </div>
            </div>
          </div>

        <div className="mt-4 w-full"> {/* Added margin top to separate TechStack */}
          <TechStack />
        </div>

      </div>
    </div>

  );
}

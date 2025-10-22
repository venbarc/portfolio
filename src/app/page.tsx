import Footer from "./components/footer/Footer";
import Resume from "./components/resume/Resume";
import HeadStart from "./components/headStart/HeadStart";
import TechStacks from "./components/techStacks/TechStacks";
import Experience from "./components/experience/Experience";
import OtherStacks from "./components/otherStacks/OtherStacks";
import BeyondCoding from "./components/beyondCoding/BeyondCoding";
import MyContributions from "./components/myContributions/MyContributions";
import ProjectPlayground from "./components/projectPlayground/ProjectPlayground";

export default function Home() {
  return (
    <div className="container mx-auto mb-[5%]">
      <div className="mx-[3%] sm:mx-[22%]"> 
        <HeadStart />

        {/* Main Layout */}
        <div className="flex flex-col sm:flex-row gap-2 items-start mt-4 w-full">
          <div className="w-full sm:w-[40%] gap-3">
            <div>
              <BeyondCoding />
            </div>
              <Resume />              
            <div>
            </div>
          </div>
          <div className="w-full sm:w-[60%]">
            <Experience />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 items-start mt-2 w-full">
          <div className="w-full sm:w-[60%]">
              <TechStacks />
          </div>
          <div className="w-full sm:w-[40%] gap-2">
            <div>
              <OtherStacks/>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 items-start mt-2 w-full">
          <div className="w-full sm:w-[35%]">
              <ProjectPlayground />
          </div>
          <div className="w-full sm:w-[65%]">
              <MyContributions />
          </div>
        </div>

        <Footer />

      </div>
    </div>

  );
}

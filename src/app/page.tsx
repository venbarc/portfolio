import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import HeadStart from "./components/headStart/HeadStart";
import Resume from "./components/resume/Resume";

export default function Home() {
  return (
    <div className="container mx-auto mt-[1%] ">
      <div className="mx-[3%] sm:mx-[22%]"> 
        <HeadStart />

        <div className="grid sm:grid-cols-[60%_40%] gap-1">
          {/* Column 1 */}
          <div className="h-full">
            <Experience />
          </div>

          {/* Column 2 */}
          <div className="grid grid-rows-2 gap-2 h-full mt-2">
            <div className="h-full">
              <About />
            </div>
            <div className="h-full">
              <Resume />              
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

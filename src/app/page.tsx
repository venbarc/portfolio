import Experience from "./components/experience/Experience";
import HeadStart from "./components/headStart/HeadStart";

export default function Home() {
  return (
    <div className="container mx-auto mt-[1%] ">
      <div className="mx-[3%] sm:mx-[22%]"> 
        <HeadStart />

        <div className="grid sm:grid-cols-[70%_30%] gap-2">
          {/* Column 1 */}
          <div className="h-full">
            <Experience />
          </div>

          {/* Column 2 */}
          <div className="grid grid-rows-2 gap-2 h-full">
            <div className="h-full">
              Col here 1
            </div>
            <div className="h-full">
              Col here 2
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

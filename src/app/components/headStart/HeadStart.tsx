"use client";

export default function HeadStart() {
  return (
    <header className="mt-[5%]">
      <div className="flex gap-5">
        <img
          src="/james-reid.jpg"
          alt="Profile"
          className="w-35 h-35 sm:w-40 sm:h-40 object-cover"
        />
        <div className="">
          <p className="text-[25px] font-bold"> Ben Obre </p> 
          <p>From Ph</p>
        </div>
      </div>
    </header>
  );
}

// import React from 'react'

// const Home = () => {
//   return (
//     <div className='bg-(--color-secondary) p-5 h-full '>
//         <div className='bg-(--color-primary) p-10'>
//       <h1 className="text-2xl text-white font-bold text-primary">NextUp</h1>
//       <h1 className="text-8xl font-semibold text-[#f1f1f1]">Pure.</h1>

//     <div className='flex gap-3 items-center'>
//       <img src="/img/clock.svg" alt="clock" className='bg-white h-20 w-20 text-[#f1f1f1] rounded-full'/>
//       <h1 className="text-8xl font-semibold text-[#f1f1f1]">Focus.</h1>
//       </div>
//       <h1 className="text-8xl font-semibold text-[#f1f1f1]">Energy.</h1>
//       </div>
//       </div>
//   )
// }

// export default Home

import React from "react";
import { TrendingUp } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-(--color-secondary) p-5 m-10">
      {/* Grid container */}
      <div className="grid grid-cols-4 gap-3 h-full">
        {/* Left Sidebar */}
        <div className="bg-(--color-secondary) ">
          <div className="col-span-2 flex flex-col gap-5">
            {/* Top section */}
            <div className="bg-(--color-primary) rounded-2xl p-5 flex flex-col gap-3">
              <div className="text-white font-bold text-xl">NextUp</div>
              <div className="text-white font-bold text-6xl">Pure.</div>
              <div className="flex gap-3 items-center">
                <img src="/img/clock.svg" alt="clock" className="h-20 w-20 bg-white rounded-full"/>
              <div className="text-white font-bold text-6xl">Focus.</div>
              </div>
              <div className="text-white font-bold text-6xl">Energy.</div>

              <div className="text-white"><p>Turn daily chaos into crystal clarity with intelligent time blocks that adopts to your work flow</p></div>
            </div>

            {/* Bottom section */}
            <div className="bg-(--color-primary) rounded-2xl p-5 flex items-center justify-center">
              <div className="bg-(--color-primary) h-40 w-full rounded-xl flex items-center justify-center text-orange-500 font-semibold">
                Lottie animation
              </div>
            </div>
          </div>
        </div>
        {/* Main Content Area */}
        <div className="col-span-3 flex flex-col gap-5">
          {/* Top bar */}
          <div className="bg-(--color-primary) rounded-2xl p-5 flex justify-between">
            {/* Left buttons */}
            <div className="flex gap-3">
              <div className="text-white font-medium">Report</div>
              <div className="text-white font-medium">Setting</div>
              <div className="text-white font-medium">Shortcut</div>
            </div>
            {/* Right buttons */}
            <div className="flex gap-3">
              <div className="text-white"><TrendingUp/></div>
              <div className="text-white font-medium">signIn</div>
            </div>
          </div>

          {/* Big content area */}
          <div className="bg-(--color-primary) flex-1 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

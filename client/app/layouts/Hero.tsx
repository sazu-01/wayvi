'use client'
//packages
import Image from "next/image";



import cover1 from "@/public/cover1.png";
import cover3 from "@/public/cover3.png";
import responsive2 from "@/public/responsive2.png";



const HomeCover = () => {


  
  return (
   

    <>
<section id="home-cover">
      {/* Container with overflow hidden and whitespace nowrap */}
      <div className="w-full overflow-hidden whitespace-nowrap xl:max-w-[1366px] xl:mx-auto">
        {/* Scrolling container with animation */}
        <div className="inline-block animate-[scroll_25s_linear_infinite]">
          {/* Image container with overlay */}
          <div className="flex relative">
            {/* Overlay gradient */}
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-black/55 to-black/55" />
            
            {/* Images */}
            <Image className="" src={cover1} alt="" />
            <Image className="-ml-[46px] sm:-ml-[26px]" src={cover3} alt="" />
            <Image className="" src={responsive2} alt="" />
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default HomeCover


import { Pattern } from "../assets"
import { Button } from "../components"
import {arrowRight} from "../assets/icons"

const Hero = () => {
  return (
  <section id="home" className=" bg-hero bg-cover relative ">
  <div className="w-full flex sm:flex-row flex-col justify-center">

  <div div className="flex flex-1 justify-center  flex-col w-[full] my-[5rem] px-20">
  <h1 className="text-white font-inter max-sm:text-xl text-5xl leading-0">SUMMER WOMEN&apos;S</h1>
  <h1 className="flex max-sm:text-xl text-5xl text-white items-center "><span className="font-architect underline decoration-2" > BRAND JEANS</span>
  <span className="font-inter lg:text-2xl rounded-full mx-3 p-2 bg-[#491E4B]">   -35%</span></h1>

<p className="my-4 font-inter font-normal text-white text-lg max-sm:text-sm ">Pull & Bear, H&M, Zara, Bershka, New Yorker, <br /> Reserved, Colin&apos;s, Asos</p>
<div>
<Button label= 'SHOP NOW' iconURL={arrowRight}/>
</div>

</div>


<div className="w-full flex flex-1 relative max-md:hidden ">
<img src={Pattern} alt="besart" className=" w-full justify-center items-center -bottom-5 absolute  right-5"/>
</div>
</div>
    </section>
  )
}

export default Hero
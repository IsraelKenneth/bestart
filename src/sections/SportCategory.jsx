import { Buttonnew } from "../components"
import {arrowRight} from "../assets/icons"
import { sportt } from "../assets"
import { sportCat } from "../conts/index.js"
import {ProductCard} from "../components"

const SportCategory = () => {
  return (
  <section id="home" className=" bg-[#EEE9DC] relative ">
  <div className="w-full flex sm:flex-row flex-col justify-center items-center">

  <div div className="flex flex-1 justify-center  flex-col w-[full] my-[5rem] max-sm:my-5 px-20 max-sm:items-start max-sm:px-5">
  <h2 className="text-4xl max-md:text-xl font-medium mb-4 font-inter text-[#000C22]">SUMMER &nbsp;
  <span className="underline font-architect text-[#000C22]">SPORTY <br /> AESTHETICS </span> </h2>
  <p className="my-4 max-sm:my-1 font-inter font-normal max-sm:w-[90%] w-[75%] max-sm:leading-6  leading-8 text-[#000C22] text-lg max-sm:text-sm ">Running shoes for a walk around the city or bicycles to the office? Why not! Our stylists offer not to be afraid to mix sports things with everyday ones.</p>
  <div className="md:w-[50%] w-full">
  <Buttonnew label= 'SHOP NOW' iconURL={arrowRight}/>
  </div>

  </div>

  <div className="w-full flex flex-1 relative ">
  <img src={sportt} alt="besart" className=" w-full justify-center items-center"/>
  </div>
  </div>

  <div className=" flex justify-center items-center md:w-full mt-4 md:mt-0">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
  {sportCat.map((product) => (
  <ProductCard key={product.brand} 
  {...product} /> ))}
  </div>
  </div>
  </section>

  )
}

export default SportCategory
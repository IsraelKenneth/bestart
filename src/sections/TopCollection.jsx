import { TopColl, TopColl1 } from "../assets"
import { Buttonnew } from "../components"
import { arrowRight } from "../assets/icons"


const TopCollection = () => {
  return (
<section className="flex flex-col">
<div className="flex flex-col lg:flex-row items-center lg:space-x-16 my-10">
  {/* <!-- Text Content Div --> */}
  <div className="flex flex-col ">
    <h2 className="text-5xl font-semibold mb-4 font-inter">IDEAS FOR &nbsp;
    <span className="underline font-architect text-[#491E4B]">POOL <br /> PARTY</span>&nbsp; STYLISH FUN</h2>
    <div className="flex flex-row justify-between w-full mt-5 border-b-2 pb-3">
    <p className="font-inter text-gray-600 text-base"> Cotton shirt &nbsp; Jacket &nbsp; Jeans &nbsp; Shoes  </p>
    <p className="font-inter font-bold text-black-600 text-base">Pull & Bear <span className="font-inter text-xs rounded-full mx-3 p-2 bg-[#eae9ea]"> <em>-230$</em> </span></p> </div>
    <div className="flex flex-row justify-between w-full mt-4">
    <p className="font-inter text-gray-600 text-base"> Dress &nbsp; Shoes &nbsp; Glasses </p> 
    <p className="font-inter font-bold text-black-600 text-base">Zara <span className="font-inter text-xs rounded-full mx-3 p-2 bg-[#eae9ea]"><em>-100$</em> </span></p>
    </div>

    <Buttonnew label= 'VIEW ALL COLLECTIONS' iconURL={arrowRight} />
  </div>

  {/* <!-- Images Div --> */}
  <div className="flex justify-center mt-4 lg:mt-0">
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
      {/* <!-- Image 1 --> */}
      <div className="flex-1">
        <img src={TopColl} alt="top collections" className="w-full h-auto " />
      </div>


      <div class="flex-1">
        <img src={TopColl1} alt="top collections" className="w-full h-auto " />
      </div>
    </div>
  </div>
  </div>
  <div className="sm:block max-sm:hidden border-b-2 w-[80%] flex my-[5rem] mx-auto" />

</section>
  )
}

export default TopCollection
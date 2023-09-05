import { TopColl, TopColl1 } from "../assets"


const TopCollection = () => {
  return (
<section class="flex flex-col lg:flex-row items-center lg:space-x-8 my-40">
  {/* <!-- Text Content Div --> */}
  <div className="lg:w-1/2">
    <h2 className="text-5xl font-semibold mb-4 font-inter">IDEAS FOR &nbsp;
    <span className="underline font-architect">POOL <br /> PARTY</span>&nbsp;
STYLISH FUN</h2>
    <p className="text-gray-600 lg:text-lg text-base max-w-lg">Dive into our exclusive pool party discounts! Attendees will have the chance to snag their favorite [Your Brand Name] pieces at unbeatable prices. Summer shopping has never been this stylish.</p>
  </div>

  {/* <!-- Images Div --> */}
  <div className="lg:w-1/2 flex justify-center mt-4 lg:mt-0">
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
</section>
  )
}

export default TopCollection
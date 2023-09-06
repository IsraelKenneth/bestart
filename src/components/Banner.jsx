import { Buttonnew } from "../components"
import { arrowRight } from "../assets/icons"

const Banner = () => {
  return (
  <div className="padding-x">
  <div className="bg-banner2 bg-cover py-8 padding-x text-white ">
  <h2 className="text-4xl font-medium mb-4 font-inter">SUMMER &nbsp;
  <span className="underline font-architect text-white">PARTY</span><br /> POP-UP STORE</h2>
  <p className="text-lg mb-6">Everything you need to get together for a summer party</p>
  <div className="w-[30rem]"> <Buttonnew label= 'VIEW ALL COLLECTIONS' iconURL={arrowRight} />
  </div>
   </div>
  </div>
  )
}

export default Banner

    
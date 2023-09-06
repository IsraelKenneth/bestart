import { topDress } from "../conts/index.js"
import { topDres4, topDres5 } from "../assets/index.js"
import { ProductCard } from "../components"


const Categories = () => {
  return (
<section className="flex flex-row w-full">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:space-x-12 ">
    {/* <!-- First Div (For LG Screens) --> */}
    <div className="lg:w-1/2 lg:flex justify-center flex-1 lg:space-x-2 mb-4 lg:mb-0">
      {/* <!-- Dress Images --> */}
          {/* <!-- Dress Images --> */}
    {topDress.map((drez) =>(
      <ProductCard key={drez.description}
      {...drez} />
    ))}
    </div>


    {/* <!-- Second Div --> */}
    <div className=" lg:text-center flex flex-col h-full">
      {/* <!-- Box with "Show All Dresses" --> */}
      <div className="border-[#9c9d9e44] border h-full">
        <div className="w-full  text-white flex items-center justify-center">
        <h2 className="text-2xl font-bold mb-2">Show All Dresses</h2>
        <p className="text-gray-600 mb-4">SHOW ALL DRESSES</p>
        </div>        
      </div>
      <div className="flex items-center w-full justify-between space-x-2">
        <img src={topDres4} alt="Dress 4" className="w-full" />
        <img src={topDres5} alt="Dress 5" className="w-full"/>
        </div>
    </div>
  </div>
</section>

  )
}

export default Categories
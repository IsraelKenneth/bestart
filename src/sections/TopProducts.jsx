import { TopProductCard } from "../components"
import { topProduct } from "../conts/index.js"


const TopProducts = () => {
  return (
    <div class="relative overflow-hidden">
  <div class="flex items-center space-x-4">
    {/* <!-- Left arrow button --> */}
    <button class="left-5 absolute bg-gray-300 hover:bg-gray-400 rounded-full p-2 transition-transform transform translate-x-[-50%] hidden lg:block">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    </button>

    {/* <!-- Product cards container --> */}
    <div class="flex space-x-4  ">
    {topProduct.map((product) => (
        <TopProductCard key={product.brand} 
        {...product} />
    ))

    }
    </div>

    {/* <!-- Right arrow button --> */}
    <button class="right-0 absolute bg-gray-300 hover:bg-gray-400 rounded-full p-2 transition-transform transform translate-x-[-50%] hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
    </button>
  </div>
</div>


  )
}

export default TopProducts
import { Logo, footer } from "../assets"


const Footer = () => {
  return (
    <footer class="bg-white text-black py-8 padding-t padding-x ">
  <div class=" mx-auto sm:p-2 lg:p-4 border">
    <div class="flex flex-col ">
      {/* <!-- Left Div with Image and Subscription Form --> */}
      <div class="mb-8 md:mb-0 w-full md:pr-8 flex">
        <div class="flex md:flex-row flex-col items-center justify-between md:space-x-10">
          {/* <!-- Image --> */}
          <img src={footer} alt="Footer Image" className="" />

          {/* <!-- Subscription Form --> */}
          <div className="flex flex-col justify-start w-full max-sm:mt-5">
            <div class="border-black border w-[40%] max-sm:w-[80%] font-intertext-sm max-sm:text-base bg-white p-1 text-center mb-5">
            <p class="font-semibold">Get -10% on any order</p>
          </div>
          <h3 className="font-inter text-xl max-sm:text-base font-medium max-w-[70%] max-sm:w-full mb-5">ON YOUR FIRST PURCHASE BY SUBSCRIBING</h3>
          <form class="flex flex-col flex-1">
            <label for="email" class="sr-only">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              class="w-full px-4 py-2 border-b-2  border-gray-600  mb-5  focus:outline-none"
            />
            <button
              type="submit"
              class="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300 w-[40%] items-center justify-center"
            >
              Subscribe
            </button>
          </form>
        </div>
        </div>
      </div>

      <div className="sm:block max-sm:hidden border-b-2 w-[95%] flex my-[2.5rem] mx-auto" />

      {/* <!-- Right Div with Sections --> */}
      <div className="flex flex-row max-sm:flex-col w-full mt-5">
      <div className="flex flex-col mx-10">
      <img src={Logo} alt="logo" className="w-[8rem]" />
      <div className="flex flex-row w-[35%] space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
        </svg>
        </div>
      </div>
        <div class="flex flex-1 flex-wrap justify-center space-x-4 mb-4">
          {/* <!-- Social Media Icons (Add your own icons and links) --> */}
          <a href="#" class="text-gray-300 hover:text-white transition duration-300">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-gray-300 hover:text-white transition duration-300">
            <i class="fab fa-twitter"></i>
          </a>
          {/* <!-- Add more social media icons as needed -->

          <!-- Help and Info Section --> */}
          <div class="w-full md:w-[1/2] lg:w-1/4">
            <h4 class="font-bold text-lg mb-2 text-gray-300">Help & Info</h4>
            <ul class="text-sm text-black font-inter font-semiboldbold">
              <li><a href="#" class="hover:text-gray-300 transition duration-300">RETURNS & COMPLAINTS</a></li>
              <li><a href="#" class="hover:text-gray-300 transition duration-300">DELIVERY & PAYMENT</a></li>
              <li><a href="#" class="hover:text-gray-300 transition duration-300">FAQ</a></li>
              <li><a href="#" class="hover:text-gray-300 transition duration-300">CONTACT</a></li>
              {/* <!-- Add more help and info links as needed --> */}
            </ul>
          </div>

          {/* <!-- Cooperation Section --> */}
          <div class="w-full md:w-1/2 lg:w-1/4">
            <h4 class="font-bold text-lg mb-2 text-gray-300">Cooperation</h4>
            <ul class="text-sm text-black font-inter font-semiboldbold">
              <li><a href="#" class=" hover:text-gray-300 transition duration-300">BRAND FILES</a></li>
              <li><a href="#" class=" hover:text-gray-300 transition duration-300">MEDIA</a></li>
            <li><a href="#" class=" hover:text-gray-300 transition duration-300">ABOUT BESART</a></li>
              {/* <!-- Add more cooperation links as needed --> */}
            </ul>
          </div>
        </div>

        {/* <!-- Download Section --> */}
        <div>
          <h4 class="font-bold text-lg mb-2">Download Our App</h4>
          <p class="text-gray-300 text-sm">
            Get our app for easy access to our products and services.
          </p>
          <a href="#" class="block mt-2 text-indigo-500 hover:text-indigo-600 transition duration-300">
            <i class="fas fa-download"></i> Download Now
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
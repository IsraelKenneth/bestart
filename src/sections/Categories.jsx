
const Categories = () => {
  return (
<section className="py-10">
  <div className="container mx-auto flex flex-col lg:flex-row items-center">
    {/* <!-- First Div (For LG Screens) --> */}
    <div className="lg:w-1/2 lg:flex justify-center lg:space-x-4 mb-4 lg:mb-0">
      {/* <!-- Dress Images --> */}
      <img src="dress1.jpg" alt="Dress 1" className="w-1/3" />
      <img src="dress2.jpg" alt="Dress 2" className="w-1/3" />
      <img src="dress3.jpg" alt="Dress 3" className="w-1/3" />
    </div>

    {/* <!-- Second Div --> */}
    <div className="lg:w-1/2 lg:text-center">
      {/* <!-- Box with "Show All Dresses" --> */}
      <div className="bg-gray-200 rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-2">Show All Dresses</h2>
        <p className="text-gray-600 mb-4">Explore our latest dress collection.</p>
        <img src="dress4.jpg" alt="Dress 4" className="mb-2" />
        <img src="dress5.jpg" alt="Dress 5" />
      </div>
    </div>
  </div>
</section>

  )
}

export default Categories
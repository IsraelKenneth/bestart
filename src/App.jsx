import { Navbar, SaleBanner, Brands, Banner, Footer } from "./components"
import {TopCollection, Hero, TopProducts, Categories, SportCategory, } from "./sections"

const App = () =>{
  return(
    <main className="relative">
    <SaleBanner />
<Navbar />

<Hero />

<div className="padding-x w-full padding-y ">
  <Brands />
</div>

<section className="padding-x w-full ">
  <TopProducts />
  <div className="sm:block max-sm:hidden border-b-2 w-[80%] flex my-[5rem] mx-auto" />
</section>

<section className="padding-x ">
<TopCollection  />
</section>

<section className="padding-x padding-b">
<Categories />
</section>

<Banner />

<section className="padding-x w-full padding-t ">
  <TopProducts />
</section>

<section className="padding-x padding-t ">
  <SportCategory />
</section>

<Footer />
    </main>
  )
}

export default App
import { Navbar, SaleBanner, Brands } from "./components"
import {TopCollection, Ideas, Hero, TopProducts, } from "./sections"

const App = () =>{
  return(
    <main className="relative">
    <SaleBanner />
<Navbar />

<Hero />

<div className="padding-x w-full padding-y">
  <Brands />
</div>

<section className="padding-x w-full">
  <TopProducts />
</section>

<section className="padding-x padding-b">
<TopCollection  />
</section>

<Ideas />

<h1 className="cursor-pointer underline">Hello</h1>
    </main>
  )
}

export default App
import { Logo } from "../assets/index.js"
import { navLinks, topLeftNav } from "../conts/index.js"


const Navbar = () => {

function handleInput() {
  const searchInput = document.getElementById("search");
  const searchIcon = document.getElementById("search-icon");

  if (searchInput.value.length > 0) {
    searchIcon.style.display = "none"; // Hide the search icon
  } else {
    searchIcon.style.display = "block"; // Show the search icon
  }
}

  return (
    <header className="padding-x py-3 w-full">
      <nav className="flex flex-col">
<div className="flex justify-between items-center max-container w-full">
<div className="flex">
<ul className="flex flex-row justify-center items-center gap-4">
{topLeftNav.map((topnav) =>(
<li key={topnav.label} className="font-inter font-medium text-sm">
  <a href={topnav.href}> {topnav.label}</a>
</li> ))}
</ul>
</div>

<img src={Logo} />

<div className="flex flex-row justify-center items-center gap-4">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

</div>


</div>
<div className="flex justify-between items-center max-container w-full sm:mt-8 mt-12">

<form className="relative">
 <input
        id="search"
        type="search"
        className="w-full px-3 py-2 rounded-b   bg-gray-100 focus:outline-none"
        placeholder="Search"
    />

</form>

<ul className=" gap-5 flex">
  {navLinks.map((links) =>(
    <a className="font-inter text-sm" href={links.href}> {links.label}</a>
  ))}
</ul>

<div>

</div>
</div>
      </nav>
    </header>
  )
}

export default Navbar
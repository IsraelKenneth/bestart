
const Button = ({label, iconURL}) => {
  return (
    <button className=" border-r-2 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-[white] rounded-full text-[#491E4B] border-[white] hover:bg-[#491E4B] hover:text-white hover:border-[#491E4B]">
        {label}
        <img src={iconURL} alt="arrow right" className="ml-2  "/>
    </button>
  )
}

export default Button

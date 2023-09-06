
const Buttonnew = ({label, iconURL}) => {
  return (
    <button className=" border-r-2 flex justify-between items-center gap-2 px-7 py-2 border font-bold  font-inter text-sm max leading-none bg-[#eae8e8] rounded-full text-[#491E4B] border-[#eae8e8] hover:bg-[#491E4B] hover:text-white hover:border-[#491E4B] mt-5 w-[60%] transition duration-300">
        {label}
        <img src={iconURL} alt="arrow right" className=""/>
    </button>
  )
}

export default Buttonnew
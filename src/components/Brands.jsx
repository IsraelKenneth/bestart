import { brandImages } from "../conts/index.js"

const Brands = () => {
  return (
    <div className="flex justify-center items-center space-x-20 ">
        {brandImages.map((icons) => (
            <div>
            <img src={icons.icon} alt="brands" className="w-24" />
            </div>

        ))}
    </div>
  )
}

export default Brands        
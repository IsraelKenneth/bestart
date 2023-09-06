
const ProductCard = ({image, brand, price, description}) => {
  return (
    <div className="flex flex-col justify-center w-full bg-white rounded-lg ">
        <img src={image} alt={brand} className="w-full object-cover mb-2" />
        <div className="flex flex-col">        
        <h3 className="text-lg font-semibold">{brand}</h3>
        <div className="flex flex-row justify-between">
        <p>{description}</p>
        <p className="text-gray-600 ">{price}</p>
        </div>
        </div>
    </div>
  )
}

export default ProductCard
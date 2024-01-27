import React from "react"
import FormattedPrice from "../product/FormattedPrice"
import Image from "next/image"

interface Props {
    item: any
}

const SearchProducts: React.FC<Props> = ({item}) => {
    return (
        <div className="flex items-center gap-4">
            <Image className="w-24" width={200} height={200} src={item.image} alt="productImage"/>
            <div>
                <p className="text-xs -mb-1">
                    {item.brand.name}/{item.seller.name}
                </p>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-xs">{item.description.substring(0, 100)}</p>
                <p className="text-sm flex items-center gap-1">
                    price:{" "}
                    <span className="font-semibold">
            <FormattedPrice amount={item.originalPrice}/>
          </span>
                    <span className="text-gray-600 line-through">
            <FormattedPrice amount={item.salePrice}/>
          </span>
                </p>
            </div>
        </div>
    )
}

export default SearchProducts

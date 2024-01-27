import React from "react";
import {ProductProps} from "../../../type"
import Image from "next/image"
import {HiShoppingCart} from "react-icons/hi"
import {FaHeart} from "react-icons/fa"
import FormattedPrice from "./FormattedPrice"
import StarIcon from "@mui/icons-material/Star"

interface Props {
    productData: ProductProps[]
}

const Products: React.FC<Props> = ({productData}) => {
    return (
        <div className={`w-full px-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6`}>
            {productData.map(
                ({
                     id,
                     name,
                     seller,
                     brand,
                     description,
                     image,
                     originalPrice,
                     salePrice,
                     rating,
                     sold
                 }: ProductProps) => (
                    <div
                        key={id}
                        className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
                    >
                        <div className="w-full h-[260px] relative">
                            <Image
                                className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                                width={300}
                                height={300}
                                src={image}
                                alt="productImage"
                            />
                            <div
                                className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                                <span
                                    onClick={() => {
                                    }}
                                    className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
                                >
                                  <HiShoppingCart/>
                                </span>
                                <span
                                    onClick={() => {
                                    }}
                                    className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
                                >
                                    <FaHeart/>
                                </span>
                            </div>
                        </div>
                        <hr/>
                        <div className="px-4 py-3 flex flex-col gap-1">
                            <p className="text-xs text-gray-500 tracking-wide">{brand.name}/{seller.name}</p>
                            <p className="text-base font-medium">{name}</p>
                            <p className="flex items-center gap-2">
                                <span className="text-sm line-through">
                                    <FormattedPrice amount={originalPrice}/>
                                </span>
                                <span className="text-amazon_blue font-semibold">
                                    <FormattedPrice amount={salePrice}/>
                                </span>
                            </p>
                            <p className="text-xs text-gray-600 text-justify">
                                {description.substring(0, 120)}
                            </p>
                            <div className="flex">
                                <p><b>{rating} <StarIcon className='text-amber-600'/></b></p>
                                <p className="ml-auto">Sold: {sold}</p>
                            </div>
                            <button
                                onClick={() => {
                                }}
                                className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Products

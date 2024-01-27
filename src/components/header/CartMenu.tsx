import Image from "next/image"
import React from "react"
import Link from "next/link"
import cartIcon from "@/images/cartIcon.png"

interface Props {
}

const CartMenu: React.FC<Props> = () => {
    return (
        <Link
            href="#"
            className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
            <Image
                className="w-auto object-cover h-8"
                src={cartIcon}
                alt="cartImg"
            />
            <p className="text-xs text-white font-bold mt-3">Cart</p>
            <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">0</span>
        </Link>
    )
}

export default CartMenu

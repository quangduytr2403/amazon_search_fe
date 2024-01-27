import React from "react"
import Link from "next/link"

interface Props {
}

const ReturnOrderMenu: React.FC<Props> = () => {
    return (
        <Link
            href="#"
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
            <p>Return</p>
            <p className="text-white font-bold">& Orders</p>
        </Link>
    )
}

export default ReturnOrderMenu

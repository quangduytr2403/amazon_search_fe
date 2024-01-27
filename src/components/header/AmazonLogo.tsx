import React from "react"
import Image from "next/image"
import logo from "@/images/logo.png"
import Link from "next/link"

interface Props {
}

const AmazonLogo: React.FC<Props> = () => {
    return (
        <Link
            href={"/"}
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
        >
            <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg"/>
        </Link>
    )
}

export default AmazonLogo

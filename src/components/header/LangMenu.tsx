import React from "react"
import {BiCaretDown} from "react-icons/bi"
import ReactCountryFlag from "react-country-flag"
import Link from "next/link"

interface Props {
}

const LangMenu: React.FC<Props> = () => {
    return (
        <Link
            href="#"
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
            <p className="text-white font-bold flex items-center">
                <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{
                        width: '2em',
                        height: '2em',
                    }}
                    title="US"
                    className="mr-1"
                /> EN
                <span>
              <BiCaretDown/>
            </span>
            </p>
        </Link>
    )
}

export default LangMenu

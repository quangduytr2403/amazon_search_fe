import React from "react"
import {BiCaretDown} from "react-icons/bi"

interface Props {
}

const AccountMenu: React.FC<Props> = () => {
    return (
        <div
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
        >
            <p>Hello, Duy</p>
            <p className="text-white font-bold flex items-center">
                Account & Lists{" "}
                <span>
                <BiCaretDown/>
              </span>
            </p>
        </div>
    )
}

export default AccountMenu

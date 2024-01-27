import React from "react"
import {SlLocationPin} from "react-icons/sl"

interface Props {
}

const DeliveryMenu: React.FC<Props> = () => {
    return (
        <div
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
            <SlLocationPin/>
            <div className="text-xs">
                <p>Deliver to</p>
                <p className="text-white font-bold">Vietnam</p>
            </div>
        </div>
    )
}

export default DeliveryMenu

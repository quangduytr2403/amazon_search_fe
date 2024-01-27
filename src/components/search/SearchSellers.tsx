import React from "react"
import Image from "next/image"

interface Props {
    item: any
}

const SearchSellers: React.FC<Props> = ({item}) => {
    return (
        <div className="flex items-center gap-4">
            <Image className="w-24" width={200} height={200} src={item.logo} alt="sellerLogo"/>
            <div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-xs">{item.description.substring(0, 100)}</p>
            </div>
        </div>
    )
}

export default SearchSellers

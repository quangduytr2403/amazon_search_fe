import React from "react"

interface Props {
    item: any
    onSelectSort: any
}

const SortItem: React.FC<Props> = ({item, onSelectSort}) => {
    return (
        <li
            className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:bg-blue-800 px-2 cursor-pointer duration-200"
            onClick={() => onSelectSort(item)}
        >
            {item.display}
        </li>
    )
}

export default SortItem

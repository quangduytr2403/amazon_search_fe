import React from "react"

interface Props {
  item: any,
  onSelectCategory: (item: any) => void
}

const ParentCategories: React.FC<Props> = ({ item, onSelectCategory }) => {
  return (
      <li
          className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:bg-blue-800 px-2 cursor-pointer duration-200"
          onClick={() => onSelectCategory(item)}
      >
        {item.name}
      </li>
  )
}

export default ParentCategories

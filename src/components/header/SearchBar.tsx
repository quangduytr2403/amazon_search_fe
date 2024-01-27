import React from "react"
import {CategoryProps} from "../../../type"
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined"
import ParentCategories from "@/components/header/ParentCategories"
import Link from "next/link"
import {HiOutlineSearch} from "react-icons/hi"

interface Props {
    searchKey: string
    handleSearch: (e: any) => void
    currentCategory: CategoryProps
    availableCategories: CategoryProps[]
    showAllCategory: boolean
    setShowAllCategory: (value: boolean) => void
    handleSelectCategory: (category: CategoryProps) => void
}

const SearchBar: React.FC<Props> = ({
                                        showAllCategory,
                                        setShowAllCategory,
                                        currentCategory,
                                        availableCategories,
                                        handleSelectCategory,
                                        handleSearch,
                                        searchKey
                                    }) => {
    return (
        <>
            <span
                onClick={() => setShowAllCategory(!showAllCategory)}
                className="h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer pl-1 duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
            >
                    {currentCategory.name}
                <span>
                      <ArrowDropDownOutlinedIcon/>
                </span>
            </span>
            {showAllCategory && (
                <div>
                    <ul
                        className="absolute w-56 h-30 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black flex flex-col gap-1 z-50"
                    >
                        {availableCategories.map((item: CategoryProps) => (
                            <ParentCategories key={item.id} item={item}
                                              onSelectCategory={handleSelectCategory}/>
                        ))}
                    </ul>
                </div>
            )}
            <input
                onChange={handleSearch}
                value={searchKey}
                className="w-full h-full rounded-br-md rounded-tr-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
                type="text"
                placeholder="Search Amazon"
            />
            <span
                className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
                         {searchKey ? (
                             <Link
                                 href={{
                                     pathname: `/search`,
                                     query: {
                                         categories: currentCategory.id,
                                         searchKey: searchKey,
                                     },
                                 }}
                             >
                                 <HiOutlineSearch/>
                             </Link>
                         ) : (
                             <span>
                                 <HiOutlineSearch/>
                             </span>
                         )}
            </span>
        </>
    )
}

export default SearchBar

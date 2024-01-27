import React from "react"
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined"
import {SortProps} from "../../../type"
import {SortValue} from "@/constant/sort"
import SortItem from "./SortItem"

interface Props {
    data: any
    onChange: (value: any) => void
}

const SearchHeader: React.FC<Props> = ({data, onChange}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [currentSort, setCurrentSort] = React.useState<SortProps>(
        {
            id: "1",
            display: "Rating (high to low)",
            value: {
                field: "rating",
                order: "DESC"
            }
        }
    );

    let start
    let end
    if ((data.page + 1) * data.itemPerPage >= data.total) {
        start = data.page * data.itemPerPage + 1
        end = data.total
    } else {
        start = data.page * data.itemPerPage + 1
        end = (data.page + 1) * data.itemPerPage
    }

    const handleSelectSort = (sort: SortProps) => {
        setCurrentSort(sort)
        setShowAll(false)
        onChange(sort)
    }

    return (
        <div className="flex border-b border-b-solid border-amazon_blue pb-2">
            <div className="ml-3 mt-2">
                {start} - {end} of {data.total} results for &quot;
                <span className="text-amber-600 font-bold">{data.searchKey}</span>&quot;
            </div>
            <div className="ml-auto">
                <span
                    onClick={() => setShowAll(!showAll)}
                    className="bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer pl-1 duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-md mr-3 mt-2"
                >
                    {currentSort.display}
                    <span>
                        <ArrowDropDownOutlinedIcon/>
                    </span>
                </span>
                {showAll && (
                    <div>
                        <ul
                            className="absolute w-56 h-30 top-30 right-3 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black flex flex-col gap-1 z-50"
                        >
                            {SortValue.map((item: any) => (
                                <SortItem key={item.id} item={item} onSelectSort={handleSelectSort}/>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchHeader

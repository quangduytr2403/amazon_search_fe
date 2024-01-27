import React from "react"

interface Props {
    onMinChange: (event: any) => void
    onMaxChange: (event: any) => void
}

const PriceFilter: React.FC<Props> = ({onMinChange, onMaxChange}) => {
    return (
        <div className="flex">
            <input
                type="number"
                placeholder="$Min"
                min={0}
                className='w-1/3 border border-solid border-gray-500 p-1'
                onBlur={onMinChange}
            />
            <input
                type="number"
                placeholder="$Max"
                min={0}
                className='w-1/3 ml-2 border border-solid border-gray-500 p-1'
                onBlur={onMaxChange}/>
        </div>
    )
}

export default PriceFilter
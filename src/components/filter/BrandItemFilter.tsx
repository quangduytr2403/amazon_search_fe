import React from "react"

interface Props {
    brand: any
    current: any[]
    onChange: (event: any) => void
}
const BrandItemFilter: React.FC<Props> = ({brand, current, onChange}) => {
    return (
        <div>
            <input
                type="checkbox"
                id={brand.id}
                value={brand.id}
                checked={current.includes(brand.id)}
                onChange={onChange}
            />
            <label htmlFor={brand.id}>{brand.name}</label>
        </div>
    )
}

export default BrandItemFilter
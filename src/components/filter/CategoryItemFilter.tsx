import React from "react"

interface Props {
    category: any
    current: any[]
    onChange: (event: any) => void
}
const CategoryItemFilter: React.FC<Props> = ({category, current, onChange}) => {
    return (
        <div>
            <input
                type="checkbox"
                id={category.id}
                value={category.id}
                checked={current.includes(category.id)}
                onChange={onChange}
            />
            <label htmlFor={category.id}>{category.name}</label>
        </div>
    )
}

export default CategoryItemFilter
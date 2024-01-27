import React from "react"
import RatingItemFilter from "@/components/filter/RatingItemFilter"
import PriceFilter from "./PriceFilter"
import BrandItemFilter from "./BrandItemFilter"
import CategoryItemFilter from "@/components/filter/CategoryItemFilter"

interface Props {
    className?: string
    categories: any[]
    brands: any[]
    data: any
    setData: (data: any) => void
}

const STAR_RATING = [4,3,2,1]
const FilterSideBar: React.FC<Props> = ({className, categories, brands, data, setData}) => {
    const handleChildCategoriesChange = (e: any) => {
        const checked = e.target.checked
        const value = e.target.value

        const updatedChildCategories = [...data.childCategories]

        if (checked) {
            updatedChildCategories.push(value)
        } else {
            const index = updatedChildCategories.indexOf(value)
            if (index !== -1) {
                updatedChildCategories.splice(index, 1)
            }
        }

        setData({ ...data, childCategories: updatedChildCategories })
    }

    const handleBrandsChange = (e: any) => {
        const checked = e.target.checked
        const value = e.target.value

        const updatedBrands = [...data.brands]

        if (checked) {
            updatedBrands.push(value)
        } else {
            const index = updatedBrands.indexOf(value)
            if (index !== -1) {
                updatedBrands.splice(index, 1)
            }
        }

        setData({ ...data, brands: updatedBrands })
    }

    const handleRatingChange = (value: any) => {
        if(data.rating === value) {
            setData({ ...data, rating: null })

        } else {
            setData({...data, rating: value})
        }
    }

    const handlePriceMinChange = (e: any) => {
        const value = e.target.value
        setData({...data, min: value})
    }

    const handlePriceMaxChange = (e: any) => {
        const value = e.target.value
        setData({...data, max: value})
    }

    return (
        <div className={`ml-3 mt-5 ${className}`}>
            {/*Categories filter*/}
            <div className="font-bold">Categories</div>
            {categories.length > 0 && (
                <div>
                    {categories.map((category: any, idx: any) => (
                        <CategoryItemFilter key={idx} category={category} current={data.childCategories} onChange={handleChildCategoriesChange} />
                    ))}
                </div>
            )}
            {/*Rating filter*/}
            <div className="font-bold">Customer Reviews</div>
            {
                STAR_RATING.map((item: number) => (
                    <RatingItemFilter key={item} star={item} selected={data.rating === item} onChange={handleRatingChange} />
                ))
            }
            {/*Brands filter*/}
            <div className="font-bold">Brands</div>
            {brands.length > 0 && (
                <div>
                    {brands.map((brand: any, idx: any) => (
                        <BrandItemFilter key={idx} brand={brand} current={data.brands} onChange={handleBrandsChange} />
                    ))}
                </div>
            )}
            {/*Price filter*/}
            <div className="font-bold">Price</div>
            <PriceFilter onMinChange={handlePriceMinChange} onMaxChange={handlePriceMaxChange}  />
        </div>
    )
}

export default FilterSideBar

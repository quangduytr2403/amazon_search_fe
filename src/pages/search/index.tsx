import Products from "@/components/product/Products"
import React, {useEffect} from "react"
import {Pagination} from "@mui/material"
import FilterSideBar from "@/components/filter/FilterSideBar"
import SearchHeader from "@/components/search/SearchHeader"
import {useRouter} from "next/router"
import {BrandProps, CategoryProps, FilterProps} from "../../../type"
import Head from "next/head"

interface Props {
}

const ALL_CATEGORY_ID = "9999999"

const Search: React.FC<Props> = () => {
    const [controller, setController] = React.useState({
        page: 0,
        itemPerPage: 12
    })
    const [products, setProducts] = React.useState([])
    const [productCount, setProductCount] = React.useState(0)
    const totalPage = Math.ceil(productCount / controller.itemPerPage)

    const [sort, setSort] = React.useState({
        id: "1",
        display: "Rating (high to low)",
        value: {
            field: "rating",
            order: "DESC"
        }
    })

    const searchKey = useRouter().query.searchKey
    const parentCategories = useRouter().query.categories
    const [availableChildCategories, setAvailableChildCategories] = React.useState<CategoryProps[]>([])
    const [availableBrands, setAvailableBrands] = React.useState<BrandProps[]>([])
    const [filterData, setFilterData] = React.useState<FilterProps>({
        brands: [],
        childCategories: [],
        rating: null,
        min: null,
        max: null
    })

    useEffect(() => {
        const getData = async () => {
            let url = 'http://localhost:8081/products?' +
                `pageIndex=${controller.page}` +
                `&pageSize=${controller.itemPerPage}`
            if (searchKey) url += `&searchKey=${searchKey}`

            if (parentCategories) {
                let categories = []
                if (parentCategories != ALL_CATEGORY_ID) {
                    categories.push(parentCategories)
                }
                if (filterData.childCategories.length > 0) {
                    categories = filterData.childCategories
                }
                url += `&categories=${categories.toString()}`
            }

            if (filterData.brands.length > 0) {
                url += `&brands=${filterData.brands.toString()}`
            }

            if (filterData.rating) {
                url += `&rating=${filterData.rating}`
            }

            if (filterData.min) {
                url += `&min=${filterData.min}`
            }

            if (filterData.max) {
                url += `&max=${filterData.max}`
            }

            url += `&orderBy=${sort.value.field}`
            url += `&orderDirection=${sort.value.order}`

            const response = await fetch(url)
            const data = await response.json()
            setProducts(data.data.items)
            setProductCount(parseInt(data.data.total))
        };
        getData();
    }, [controller, filterData.brands, filterData.childCategories, filterData.max, filterData.min,
        filterData.rating, parentCategories, searchKey, sort.value.field, sort.value.order])

    React.useMemo(() => {
        const getAvailableChildCategories = async () => {
            const url = 'http://localhost:8081/categories/child?' +
                `&id=${parentCategories == ALL_CATEGORY_ID ? "" : parentCategories}`
            const response = await fetch(url)
            const data = await response.json()
            setAvailableChildCategories(data.data)
        };
        if (parentCategories) {
            getAvailableChildCategories()
        }
    }, [parentCategories]);

    React.useMemo(() => {
        const getAvailableBrands = async () => {
            const url = 'http://localhost:8081/brands/with-products?' +
                `categories=${parentCategories == ALL_CATEGORY_ID ? "" : parentCategories}` +
                `&searchKey=${searchKey}`
            const response = await fetch(url)
            const data = await response.json()
            setAvailableBrands(data.data)
        };
        if (parentCategories && searchKey) {
            getAvailableBrands()
        }
    }, [parentCategories, searchKey])

    const handlePageChange = (event: any, newPage: any) => {
        setController({
            ...controller,
            page: newPage - 1
        });
    };

    return (
        <>
            <Head>
                <title>Search</title>
            </Head>
            <main>
                <SearchHeader data={{
                    page: controller.page,
                    total: productCount,
                    itemPerPage: controller.itemPerPage,
                    searchKey: searchKey
                }} onChange={setSort}/>
                <div className="flex">
                    <FilterSideBar
                        className="w-1/6"
                        brands={availableBrands}
                        categories={availableChildCategories}
                        data={filterData}
                        setData={setFilterData}/>
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="relative my-10">
                            {products.length > 0 ? <Products productData={products}/> :
                                <b className="text-center">No product found</b>}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column-reverse',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Pagination className={"mb-5"} count={totalPage} color="standard"
                                        onChange={handlePageChange}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Search
import {CategoryProps} from "../../../type"
import React from "react"
import CartMenu from "./CartMenu"
import ReturnOrderMenu from "@/components/header/ReturnOrderMenu"
import AccountMenu from "./AccountMenu"
import LangMenu from "./LangMenu"
import AmazonLogo from "./AmazonLogo"
import DeliveryMenu from "./DeliveryMenu"
import SearchResult from "./SearchResult"
import SearchBar from "./SearchBar"

interface Props {
}

const ALL_CATEGORY_ID = "9999999"

const Header: React.FC<Props> = () => {
    const [searchKey, setSearchKey] = React.useState("")
    const [debouncedSearchKey, setDebouncedSearchKey] = React.useState("")

    const [filteredProducts, setFilteredProducts] = React.useState([])
    const [filteredSellers, setFilteredSellers] = React.useState([])
    const [suggestKeywords, setSuggestKeywords] = React.useState([])

    const [currentCategory, setCurrentCategory] = React.useState<CategoryProps>({
        id: ALL_CATEGORY_ID,
        name: "All",
    })
    const [availableCategories, setAvailableCategories] = React.useState<CategoryProps[]>([{
        id: ALL_CATEGORY_ID,
        name: "All"
    }])
    const [showAllCategory, setShowAllCategory] = React.useState(false)

    const refResult = React.useRef(null)
    const [showResult, setShowResult] = React.useState(false)

    const handleSearch = (e: any) => {
        setSearchKey(e.target.value)
    };

    const handleSelectCategory = (category: CategoryProps) => {
        setCurrentCategory(category)
        setShowAllCategory(false)
    }

    React.useEffect(() => {
        function handleClickOutside(event: { target: any; }) {
            // @ts-ignore
            if (refResult.current && !refResult.current.contains(event.target)) {
                setShowResult(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, [refResult])

    React.useEffect(() => {
        const getProductData = async () => {
            const url = "http://localhost:8081/products?" +
                "pageIndex=0" +
                "&pageSize=3" +
                `&searchKey=${debouncedSearchKey}` +
                `&categories=${currentCategory.id == ALL_CATEGORY_ID ? "" : currentCategory.id}`
            const response = await fetch(url)
            const data = await response.json()
            setFilteredProducts(data.data.items)
        }

        const getSellerData = async () => {
            const url = "http://localhost:8081/sellers?" +
                "pageIndex=0" +
                "&pageSize=2" +
                `&searchKey=${debouncedSearchKey}` +
                `&categories=${currentCategory.id == ALL_CATEGORY_ID ? "" : currentCategory.id}`
            const response = await fetch(url)
            const data = await response.json()
            setFilteredSellers(data.data.items)
        }

        const getSuggestKeywords = async () => {
            const url = 'https://api.rainforestapi.com/request?' +
                `api_key=${process.env.NEXT_PUBLIC_RAINFOREST_API_KEY}` +
                '&type=autocomplete' +
                '&amazon_domain=amazon.com' +
                `&search_term=${debouncedSearchKey}` +
                '&autocomplete_alias=stripbooks'
            const response = await fetch(url)
            const data = await response.json()
            if (data['autocomplete_results']) setSuggestKeywords(data['autocomplete_results'])
        }

        if (debouncedSearchKey) {
            getProductData()
            getSellerData()
            getSuggestKeywords()
            setShowResult(true)
        }
    }, [currentCategory.id, debouncedSearchKey])

    React.useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedSearchKey(searchKey);
        }, 500);
        return () => clearTimeout(delayInputTimeoutId);
    }, [searchKey]);


    React.useMemo(() => {
        const getAvailableParentCategories = async () => {
            const url = `http://localhost:8081/categories/parent`
            const response = await fetch(url)
            const data = await response.json()
            setAvailableCategories(prev => [...prev, ...data.data])
        };
        getAvailableParentCategories()
    }, [])

    return (
        <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
            <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
                <AmazonLogo/>
                <DeliveryMenu/>
                <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
                    <SearchBar
                        showAllCategory={showAllCategory}
                        setShowAllCategory={setShowAllCategory}
                        currentCategory={currentCategory}
                        availableCategories={availableCategories}
                        handleSelectCategory={handleSelectCategory}
                        handleSearch={handleSearch}
                        searchKey={searchKey}
                    />
                    {showResult && (
                        <SearchResult refResult={refResult} keywords={suggestKeywords} products={filteredProducts} sellers={filteredSellers}/>
                    )}
                </div>
                <LangMenu/>
                <AccountMenu/>
                <ReturnOrderMenu/>
                <CartMenu/>
            </div>
        </div>
    )
}

export default Header

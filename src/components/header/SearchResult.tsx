import React from "react"
import {ProductProps, SellerProps, SuggestKeywordProps} from "../../../type"
import SearchProducts from "@/components/search/SearchProducts"
import SearchSellers from "@/components/search/SearchSellers"

interface Props {
    refResult: any
    keywords: SuggestKeywordProps[]
    products: ProductProps[]
    sellers: SellerProps[]
}

const SearchResult: React.FC<Props> = ({refResult, keywords, products, sellers}) => {
    return (
        <div
            ref={refResult}
            className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
            {keywords.length > 0 || products.length > 0 || sellers.length > 0 ? (
                <>
                    <p className="px-2 font-bold">Keywords</p>
                        {
                            keywords.map((item: any, idx: number) =>
                                <p key={idx} className="px-2">{item.suggestion}</p>)
                        }
                    <p className="px-2 font-bold">Products</p>
                    <>
                        {
                            products.map((item: ProductProps) =>
                                <SearchProducts key={item.id} item={item}/>)
                        }
                    </>
                    <p className="px-2 font-bold">Sellers</p>
                    <>
                        {
                            sellers.map((item: SellerProps) =>
                                <SearchSellers key={item.id} item={item}/>)
                        }
                    </>
                </>
            ) : (
                <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold animate-bounce">
                        Nothing is matches with your search keywords. Please try
                        again!
                    </p>
                </div>
            )}
        </div>
    )
}

export default SearchResult

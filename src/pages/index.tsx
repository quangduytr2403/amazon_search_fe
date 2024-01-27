import Banner from "@/components/banner/Banner";
import Products from "@/components/product/Products";
import React, {useEffect} from "react";
import {Pagination} from "@mui/material";
import Head from 'next/head'

interface Props {
}

const Home: React.FC<Props> = () => {
    const [products, setProducts] = React.useState([])
    const [productCount, setProductCount] = React.useState(0)
    const [controller, setController] = React.useState({
        page: 0,
        itemPerPage: 12
    })
    const totalPage = Math.ceil(productCount / controller.itemPerPage)

    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:8081/products?' +
            `pageIndex=${controller.page}` +
            `&pageSize=${controller.itemPerPage}`
            const response = await fetch(url)
            const data = await response.json()
            setProducts(data.data.items)
            setProductCount(parseInt(data.data.total))
        };
        getData()
    }, [controller])

    const handlePageChange = (event: any, newPage: any) => {
        setController({
            ...controller,
            page: newPage - 1
        })
    }

    return (
        <>
            <Head>
                <title>Amazon</title>
            </Head>
            <main>
                <div className="max-w-screen-2xl mx-auto">
                    <Banner/>
                    <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
                        <Products productData={products}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Pagination className={"mb-5"} count={totalPage} color="standard" onChange={handlePageChange}/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
import React from "react"

interface Props {
    amount: number
}

const FormattedPrice: React.FC<Props> = ({amount}) => {
    const formattedAmount = Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    })
    return <span>{formattedAmount}</span>
}

export default FormattedPrice

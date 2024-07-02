export default function ReviewDetail({params}){
    return (
        <>
        <h1>review {params.reviewId} for product {params.productId}</h1>
        </>
    )
}
import { useRouter } from "next/router";

const ReviewDetails = () =>{
    const router = useRouter();

    const {reviewId, productId} = router.query;
    console.log(router.query);
    return <h1>Review Details {reviewId} about Product {productId}</h1>
}

export default ReviewDetails;
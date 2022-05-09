import React, { useState, useEffect } from 'react'
import { useParams  } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addItem } from '../store/actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
const Product = () => {
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);
    const {id} = useParams();
    console.log(id);

    const dispatch = useDispatch();

    const addProduct = product =>{
        dispatch(addItem(product));
    }
    useEffect(()=>{
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[])
    console.log(product);
    const Loading = () =>{
        return(
            <div className='d-flex flex-row justify-content-center mt-5'>
                <div className="col-md-6 mt-5">
                    <Skeleton height={400} width={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={105} />
                    <Skeleton height={30} width={150} />
                    <Skeleton height={45} />
                    <Skeleton height={150} />
                    <div className="d-flex flex-row">
                    <Skeleton height={40} width={100} />
                    <Skeleton height={40} width={100} style={{marginLeft:9}} />
                    </div>
                </div>
            </div>
        )
    }

    const ShowProduct = () =>{
       return(
            <div className='d-flex flex-row justify-content-center mt-5'>
                <div className="col-md-6 mt-5">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>

                <div className="col-md-6">
                    <h3 className='text-uppecase text-black-50'>{product.category && product.category[0].toUpperCase() + product.category.slice(1)}</h3>
                    <div className="title  display-4 fw-bold">
                        { product.id === 1 ? product.title.substring(0,22) : product.title}
                    </div>
                    <h6 className='mt-2 lead fw-bolder'><FontAwesomeIcon icon={ faStarHalfAlt}/> {product.rating && product.rating.rate} ({product.rating && product.rating.count} reviews)</h6>
                    <h3 className='mt-3 fw-bolder mb-4'>${product.price}</h3>
                    <div className='lh-base fs-5 fw-light mb-5'>
                        { product.description && product.description[0].toUpperCase() + product.description.slice(1)}
                    </div>
                    <button className='btn btn-outline-dark me-3 ms-2 rounded' onClick={()=>{addProduct(product)}}>Add to cart</button>
                    <button className='btn btn-dark rounded ms-2'><NavLink to="/cart" className='text-decoration-none text-light'>Go to cart</NavLink></button>
                </div>
            </div>
       )
    }
    return (
        <div className="container mt-4 pt-4">
            <div className="row ">
                {loading ? <Loading/>:  <ShowProduct/>}
            </div>
        </div>
    )
}

export default Product


import React, {useState , useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [data,setData] = useState([]);
  const [filter,setFilter] = useState(data);
  const [loading,setLoading] = useState(false);
 
  useEffect(()=>{
    let componentMounted = true;  
    const getProducts = async ()=>{
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');

        if(componentMounted)
        {
            setLoading(false);
            setData(await response.clone().json());
            setFilter(await response.json());
            console.log(filter);
            console.log(data);
        }

        return () =>{
            componentMounted = false;
        }

    } 
    getProducts();
  },[])

  const Loading = () =>{
      return(
          <>
            <div className="col-md-3 ">
                <Skeleton height={400}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={400}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={400}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={400}/>
            </div>

          </>
      )
  }
  
  const filterProducts = (category) =>{
      const updatedList = data.filter((item)=> item.category === category);
      console.log(updatedList);
      setFilter(updatedList);
  }
  const ShowProducts = () =>{
      return(
          <>
            <div className="buttons d-flex justify-content-center">
                <button className="btn btn-outline-dark me-2" onClick={()=>{setFilter(data)}}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>{filterProducts("men's clothing")}}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>{filterProducts("women's clothing")}}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>{filterProducts("jewelery")}}>Jeweleries</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>{filterProducts("electronics")}}>Electronics</button>
            </div>

            {
                filter.map(product =>{
                    return(
                        <>
                            <div className="col-md-3 mb-4 mt-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title.substring(0,15)} height="300px"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0,15)}...</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                                        
                                    </div>
                                </div>
                            </div>
                           
                        </>
                    )
                })
                
            }
          </>
      )
  }
  return (
    <div className='container my-5 py-5'>
        <div className="row">
            <div className="col-12 mb-5">
                <h1 className='display-6 fw-bolder text-center'>
                    Latest Products
                </h1>
                <hr/>
            </div>
        </div>
        <div className="row justify-content-center">
            {
                loading ? Loading() : ShowProducts()
            }
        </div>
    </div>
  )
}

export default Products
import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl} from '../../Api/endPoints'
// import {ProductCard} from '../../components/Product/ProductCard'
import ProductCard from '../../components/Product/ProductCard.jsx'
import Loader from '../../components/Loader/Loder'
function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const {productId} = useParams()
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data);
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  }, [])
  return (
    <LayOut> 
   {isLoading? (<Loader/>):(
   <ProductCard
    product={product}
    flex ={true}
    renderDesc={true}
    renderAdd={true}


/>)}
    </LayOut>
  )
}

export default ProductDetail
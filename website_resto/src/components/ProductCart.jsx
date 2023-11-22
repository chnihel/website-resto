import React from 'react'
import './PopularMenu.css'

const ProductCart = (props) => {
        const {title,imgUrl,price}= props.item
  return (
    <div className='single__product'>
                <div className='product__img'>
                  <img src={imgUrl} alt='' className='img-fluid'/>

                </div>
                <div className='product__content'>
                  <div className='rating text-center'>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                  </div>

                  <h6>{title}</h6>
                  <div className='d-flex align-items-center justify-content-between'>
                    <span className='price d-flex align-items-center'>
                      {""}
                      price: $<span>{price}</span>
                      

                    </span>
                    <span className='shopping__icon'><i class="ri-shopping-cart-line"></i></span>

                  </div>


                </div>
              </div>
  )
}

export default ProductCart

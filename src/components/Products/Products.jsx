import React from 'react'
import { watchesData } from '../../db'
import { TiStarFullOutline } from "react-icons/ti";
import "./Products.scss"

const Products = () => {
    return (
        <div className='container products__wrapper'>
            <p className='sub__title'>Find your favourite smart watch.</p>
            <h2 className='title'>Our Latest Products</h2>
            <div className="product__card__wrapper">
                {
                    watchesData.map((product) => (
                        <div className="product__card">
                            <img className='card__image' src={product.image} alt="" />
                            <div className="card__body">
                                <h2 className='product__human__name'>{product.name}</h2>
                                <div className="stars">
                                    {Array.from({ length: product.starsCount }).map((_, i) => (
                                        <span key={i}><TiStarFullOutline /></span>
                                    ))}
                                </div>
                                <div className="prices__wrapper">
                                    <strike>{product.oldPrice}</strike>
                                    <strong>{product.newPrice}</strong>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className='view__more__button'>View more</button>
        </div>
    )
}

export default Products
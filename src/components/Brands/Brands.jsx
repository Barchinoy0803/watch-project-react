import React from 'react'
import { brandsData } from '../../db'
import "./Brands.scss"

const Brands = () => {
    return (
        <div className='container brands__wrapper'>{
            brandsData.map((brand) => (
                <div className='brands__card'>
                    <img src={brand.image} alt="" />
                    <div className="content">
                        <h2 className='title'>{brand.name}</h2>
                        <p className='description'>{brand.info}</p>
                    </div>
                </div>
            ))
        }</div>
    )
}

export default Brands

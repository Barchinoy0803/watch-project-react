import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from 'swiper/modules'
import { commentsData } from '../../db'
import { TiStarFullOutline } from "react-icons/ti";

import "./Comments.scss"

const Comments = () => {
    return (
        <div className='container comments__wrapper'>
            <p className='sub__title'>Here are our some of the best clients.</p>
            <h2 className='title'>What People Say About Us</h2>
            <Swiper slidesPerView={2} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                {
                    commentsData.map((comment) => (
                        <SwiperSlide className='comment__card'>
                            <img src={comment.image} alt="" />
                            <div className="comments__content">
                                <h2 className='product__human__name'>{comment.name}</h2>
                                <p className='description'>{comment.info}</p>
                                <div className="stars">
                                    {Array.from({ length: comment.starsCount }).map((_, i) => (
                                        <span key={i}><TiStarFullOutline /></span>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Comments
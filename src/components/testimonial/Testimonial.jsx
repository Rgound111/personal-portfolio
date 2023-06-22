import React from 'react'
import './Testimonial.css'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'
import {Swiper} from 'swiper/react'
import {Pagination} from 'swiper'
import {SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: portfolio1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni id, eveniet aliquam dolores adipisci dolorem quo accusantium accusamus alias omnis inventore odio. Consequuntur?'
    },
    {
        avatar: portfolio2,
        name: 'Adam Sort',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni id, eveniet aliquam dolores adipisci dolorem quo accusantium accusamus alias omnis inventore odio. Consequuntur?'
    },
    {
        avatar: portfolio3,
        name: 'Flow sid',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni id, eveniet aliquam dolores adipisci dolorem quo accusantium accusamus alias omnis inventore odio. Consequuntur?'
    },
    {
        avatar: portfolio1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni id, eveniet aliquam dolores adipisci dolorem quo accusantium accusamus alias omnis inventore odio. Consequuntur?'
    },
    {
        avatar: portfolio2,
        name: 'Adam Sort',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni id, eveniet aliquam dolores adipisci dolorem quo accusantium accusamus alias omnis inventore odio. Consequuntur?'
    }
]




const Testimonial = () => {
    return (
        < section id='testimonial'>
            <h2>Testimonial</h2>

            <Swiper className="  testimonial__container" 
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {data?.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div ><img className='client_avatar' src={avatar} /></div>
                            <h2 className="client_name">{name}</h2>
                            <small className="client_review">{review}</small>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </section>
        
    )
}

export default Testimonial

import React from 'react'
import './Review.scss'

const Review = () => {
    return (
        <div className='review'>
            <div className="review-left">
                <div className="review-text">
                    <h3>Review</h3>
                    <h1>What Our Customers Say About Us</h1>
                    <i className="fa-solid fa-quote-left" style={{ color: '#E9BD45', fontSize: '3.5rem' }} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates et
                        nemo saepe doloribus. Enim, magni sed eveniet, aspernatur debitis eius
                        architecto non doloribus consequatur vero odio deserunt. Debitis, reiciendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime
                        blanditiis nam quidem delectus excepturi maiores aut, numquam dignissimos
                        adipisci quo doloremque rerum libero voluptatibus dolore obcaecati doloribus
                        repellendus iste.
                    </p>
                </div>

                <div className="review-customer">
                    <div className="customer-img"></div>
                    <div className="customer-info">
                        <div className="review-stars">
                            {
                                [1, 2, 3, 4, 5].map((a, i) => (
                                    <i key={i} className="fa-solid fa-star" style={{ color: '#E9BD45', fontSize: '0.7rem' }} />
                                ))
                            }
                        </div>
                        <h4>Martin Dias</h4>
                        <p>Web Designer</p>
                    </div>
                </div>
            </div>

            <div className="review-right">
                <div className="pentagon1"></div>
                <div className="pentagon2"></div>
            </div>
        </div>
    )
}

export default Review

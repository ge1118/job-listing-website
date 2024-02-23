import React from 'react'
import './Categories.scss'
import { categoriesData } from '../../data/categoriesData.js'
import RightArrow from '../../assets/images/right-arrow.png'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="categories-text">
                <h3>Jobs by Categories</h3>
                <h1>Choose Your Desire Categories</h1>
            </div>

            <div className="categories-cards">
                {
                    categoriesData.map((data, i) => (
                        <div className="category-card" key={i}>
                            <img src={data.image} alt={data.category} />
                            <h3>{data.category}</h3>
                            <p>{data.job_count} Job Vacancy</p>
                        </div>
                    ))
                }
                <div className="explore-card">
                    <p>Explore More <span>60+</span> Categories</p>
                    <img src={RightArrow} alt='More Categories' />
                </div>
            </div>
        </div>
    )
}

export default Categories

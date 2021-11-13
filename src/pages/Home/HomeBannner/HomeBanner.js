import React from 'react';
import './HomeBanner.css';
import 'animate.css';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className=' banner container-fluid'>
            <div className='row'>
                <div className='col-lg-6 col-12 mt-5'>
                    <h1 className=' text-white'>POWER <span className='text-danger'>&</span> BEAUTY</h1>
                    <br />
                    <p className=' text-light'>A car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods. Cars came into global use during the 20th century, and developed economies depend on them.</p>
                    <br />
                    <Link to='/products'><button type="button" className="btn btn-danger">Explore More</button></Link>

                </div>
                <div className='col-lg-6 col-12 mt-5'>
                    <img className='animate__animated animate__backInRight' src='/images/product-1.jpg' />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
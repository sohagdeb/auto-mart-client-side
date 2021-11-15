import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div id="contact" className="container mt-5 pb-5">
                    <div className="row" >
                        <div className="col-lg-3 footer-anchor">
                            <p className="navbar-brand fs-2" to='/home'><span className='text-danger'>AUTO</span><span className='text-warning'>MART</span></p>
                            <p>Quality With New Standards</p>
                        </div>
                        <div className="col-lg-2 footer-anchor">
                            <h3>Compnany</h3><br />
                            <p>About</p>
                            <p>Carrers</p>
                            <p>Mobile</p>
                        </div>
                        <div className="col-lg-2 footer-anchor">
                            <h3>Contact</h3><br />
                            <p>Help/FAQ</p>
                            <p>Press</p>
                            <p>Affilates</p>
                        </div>
                        <div className="col-lg-2 footer-anchor">
                            <h3>More</h3><br />
                            <p>Airelinefees</p>
                            <p>Airline</p>
                            <p>Low fare tips</p>
                        </div>
                        <div className="col-lg-3 footer-anchor">
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.twitter.com/" ><i className="fab fa-twitter-square"></i></a>
                        </div>
                    </div >
                </div >
            </footer >

        </div >
    );
};

export default Footer;
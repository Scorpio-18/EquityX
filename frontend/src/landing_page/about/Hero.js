import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center p-5'>
                <div>
                    <h1>Invest in Knowledge.</h1>
                    <h1>Build with confidence.</h1>
                </div>
                <div className='row p-5 text-start border-top'>
                    <div className='col-6'>
                        <p>EquityX is a modern stock-market platform created to make exploring financial markets a more engaging and organized experience. The platform brings together market-related information, financial products, and useful tools within a clean and intuitive interface. Whether you are discovering companies, learning about different market concepts, or exploring investment-related information, EquityX provides a convenient digital space to navigate the world of stocks.</p>

                        <p>Built with a focus on simplicity and technology, EquityX combines a responsive user interface with modern web development technologies to create a smooth experience across different sections of the platform. The idea behind EquityX is to bring financial information closer to users through a platform that is easy to navigate, visually clean, and designed with continuous learning in mind.</p>
                    </div>
                    <div className='col-6'>
                        <p>Our vision for EquityX is to create a platform where technology and financial information come together in a simple and accessible way. As the platform evolves, the focus is on improving the user experience, expanding useful features, and creating a digital environment that encourages users to explore, learn, and better understand the world of financial markets.</p>
                        <p>We aim to keep EquityX simple, practical, and user-friendly while continuously improving its features and overall experience. The goal is to make learning about financial markets more accessible through technology.</p>
                    </div>
                </div>
                <div className='row p-5'>
                    <div className='col-4'>
                         <img className="rounded-circle" src="/media/images/me.jpeg" style={{width:'140px', height:'140px', objectFit:'cover'}} />
                         <h6 className='p-1'>Samreen Sumbul</h6>
                         <p className='text-muted' style={{}}>Developer</p>
                    </div>
                    <div className='col-8 text-start'>
                        <p>Hi, I'm Samreen Sumbul, a Computer Science and Engineering student passionate about web development and building practical applications.</p>
                        <p>I enjoy learning new technologies and turning ideas into simple, user-friendly digital experiences.</p>
                        <p>EquityX is one of my projects where I explored full-stack web development using React.js, Node.js, Express.js, MongoDB, JavaScript, and Bootstrap.</p>
                        <p>Connect to <Link class="navbar-brand" style={{color: '#0d6efd'}} to="/" >HomePage / </Link><a href='' style={{textDecoration:'none'}}>TradingQ&A / Twitter</a></p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
     );
}

export default Hero;
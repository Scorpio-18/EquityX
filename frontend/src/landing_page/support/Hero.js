import React from 'react';
function Hero() {
    return ( 
        <div className='bg-primary'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h6 className='text-white mb-5'>Support Portal</h6>
                    <h4 className='text-white'>Search for an answer or browser help topics to create a ticket</h4>
                    <input className='mb-5 rounded'style={{width:'500px' ,height:'50px'}} placeholder='Eg: how do i activate F&Q, why is my order geting rejected.'></input><br/>
                    <div className="d-flex gap-3 flex-wrap">
                    <a className='text-white' href=''>Track account opening </a>
                    <a className='text-white' href=''>Track segment activation </a>
                    <a className='text-white' href=''>Track segment activation </a>
                    <a className='text-white' href=''>Intradax </a>
                    <a className='text-white' href=''>margins </a>
                    <a className='text-white' href=''>EquityX user manual</a>
                    </div>
                </div>
                <div className='col-6 p-5'>
                    <a className='text-white mb-5 d-block text-end mr-5' href=''>Track Tickets</a>
                    <h4 className='text-white mb-2'>Featured</h4>
                    <p className='text-white'>1. <a className='text-white' href=''>Current Takeovers and Delisting-January 2026</a></p>
                    <p className='text-white'>2. <a className='text-white' href=''>Largest Intraday leverages - MIS & CQ</a></p>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Hero;
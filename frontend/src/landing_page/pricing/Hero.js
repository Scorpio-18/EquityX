import React from 'react';
function Hero() {
    return ( 
        <div className='conatiner'>
            <div className='row text-center p-5'>
                <h2 className='mt-5'>Charges</h2>
                <p className='text-muted fs-5'>List of all charges and taxes</p>
                <div className='row p-5 border-top'>
                    <div className='col-4'>
                        <img src="/media/images/zero.jpeg" style={{width:'80%'}} />
                        <h2>Free equity delivery</h2>
                        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img src="/media/images/twenty.jpeg" style={{width:'100%'}} />
                        <h2>Intraday and F&O trades</h2>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-4'>
                        <img src="media/images/zero.jpeg" style={{width:'80%'}} />
                        <h2>Free direct MF</h2>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;
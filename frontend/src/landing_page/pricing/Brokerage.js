import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4'>
                    <a href="" style={{textDecoration:'none'}}><h5>Brokerage Calculator</h5></a>
                    <ul className='text-muted' style={{textAlign:'left',lineHeight:'2.5', fontSize:'12px'}}>
                        <li>Enjoy zero brokerage on equity delivery transactions, making it easier to invest in stocks and hold them for the long term without additional brokerage costs.</li>
                        <li>Trade stocks throughout the day with a simple brokerage structure of ₹20 or 0.03% per executed order, whichever is lower.</li>
                        <li>Trade equity futures with a transparent brokerage of ₹20 or 0.03% per executed order, whichever is lower, so you can clearly understand your trading costs.</li>
                        <li>Trade options at a straightforward brokerage of ₹20 per executed order, giving you a simple and predictable pricing structure.</li>
                        <li>Connect your own applications and financial tools with EquityX through developer-friendly APIs, with API access planned as a future feature.</li>
                        <li>EquityX keeps its pricing simple and easy to understand, allowing users to know the applicable brokerage before placing their trades.</li>
                        <li>Applicable exchange charges, government taxes, GST, and other statutory charges may apply in addition to the brokerage.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href="" style={{textDecoration:'none'}}><h5>List of Charges</h5></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;
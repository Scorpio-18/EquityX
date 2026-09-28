import React from 'react';
function Pricing() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4 p-5'>
                    <h3 className='text-muted'>Unbeatable pricing</h3>
                    <p className='text-muted' style={{textDecoration:"none"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>See Prcing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-8'>
                    <img src="media\images\unbeatablepricing.jpeg" width="100%"/>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
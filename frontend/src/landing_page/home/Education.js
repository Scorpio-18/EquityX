import React from 'react';
function Education() {
    return(
        <div className="container">
            <div className="row p-5">
                <div className="col-5">
                    <img src="media\images\varsity.jpeg" alt="varsity image" width="100%"/>
                </div>
                <div className="col-1"></div>
                <div className="col-6 mt-5">
                    <h3 className="text-muted">Free and open market education</h3>
                    <p className="text-muted">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className="text-muted">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TraingingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Education;
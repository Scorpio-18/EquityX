import React from 'react';
function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return ( 
        <div className="container">
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:'none'}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    <br/>
                </div>
                <div className='col-6 p-5'>
                    <img src={imageURL} style={{
                            width: '100%',
                            height: 'auto'
                        }}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;
import React from 'react';
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src={imageURL} style={{
                            width: '100%',
                            height: 'auto'
                        }}/>
                </div>
                <div className='col-6 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={tryDemo} style={{textDecoration:'none'}}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a className='p-3' href={learnMore} style={{textDecoration:'none'}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    <br/>
                    <a href={googlePlay}><img src='/media/images/google.jpg' style={{
                            width: '50%',
                            height: 'auto',
                        }}/></a>
                    <a href={appStore}><img src='/media/images/appstore.jpg' style={{
                            width: '50%',
                            height: 'auto',
                        }}/></a>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
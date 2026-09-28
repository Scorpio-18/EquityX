import React from 'react';
function Stats() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h3 className='text-muted'>Trust with confidence</h3>
                    <h4 className='text-muted'>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.8+ crore customers trust EquityX with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h4 className='text-muted'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h4 className='text-muted'>The EquityX universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4 className='text-muted'>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src="media/images/nospam.jpeg" className='w-100' width='50%'/>
                    <div >
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' className='p-5 mx-4' style={{textDecoration:"none"}}>Try EquityX demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
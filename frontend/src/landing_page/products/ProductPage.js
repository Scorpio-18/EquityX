import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
function ProductPage() {
    return ( 
        <> 
           <Hero/>
           <LeftSection 
           imageURL="/media/images/invest.jpeg" 
           productName="EquityX Invest"  
           productDescription="Build and manage your investment portfolio with confidence. EquityX Invest provides a simple and intuitive platform to discover stocks, explore investment opportunities, track your holdings, and monitor portfolio performance, all from one place."  
           tryDemo=""  
           learnMore=""  
           googlePlay="" 
           appStore="" />
           <RightSection
           imageURL="/media/images/console.jpeg" 
           productName="Console"  
           productDescription="Everything about your portfolio, in one place. EquityX Console gives you a detailed view of your holdings, positions, profit and loss, transactions, and overall portfolio performance, helping you keep track of your investments with ease."  
           learnMore=""  
           />
           <LeftSection 
           imageURL="/media/images/api.jpeg" 
           productName="EquityX API"  
           productDescription="Build powerful financial experiences with EquityX. The EquityX API is designed to help developers connect their applications with market data, portfolio information, and trading functionality, making it easier to create and integrate financial tools."  
           tryDemo=""  
           learnMore=""  
           googlePlay="" 
           appStore="" />
           <RightSection
           imageURL="/media/images/trade.jpeg" 
           productName="EquityX Trade"  
           productDescription="A smarter way to experience the markets. EquityX Trade brings market information, interactive charts, watchlists, and trading tools together in one streamlined platform, making it easier to track stocks and manage your trades."  
           learnMore=""  
           />
        </>
     );
}

export default ProductPage;
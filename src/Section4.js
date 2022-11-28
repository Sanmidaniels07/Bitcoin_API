import React from 'react'
import images from './images/imgg.png'
import Images from './images/image pmp.png'

const Section4 = () => {
  return (
    <div>
    <div className='btns'><button>Learn More</button></div>
    
    <section className='myth'>
    <section className='buysell'>
    <h2>Buy and Sell Your Cryptocurrency in three simple steps</h2>
    </section>
    <div className='sect'>
    <h3>create a free account</h3>
    <div className='imgg'>
    <img src={images} alt=""></img>
    </div>
    </div>
    <p className='sign'>sign up for free TradExpress wallet on web, iOS o android devices and follow our 
    <br/>easy process to set up your profile
    </p>
    
    <div className='sect'>
    <div className='imgg'>
    <img src={Images} alt=""></img>
    </div>
    <h3 className='deposit'>Deposit</h3>
    </div>
    <p className='lign'>sign up for free TradExpress wallet on web, iOS o android devices and follow our 
    <br/>easy process to set up your profile
    </p>
    
    <div className='sect'>
    <h3>Buy/Sell Crypto</h3>
    <div className='imgg'>
    <img src={images} alt=""></img>
    </div>
    </div>
    <p className='sign'>sign up for free TradExpress wallet on web, iOS o android devices and follow our 
    <br/>easy process to set up your profile
    </p>
    </section>
    
    </div>
  )
}

export default Section4
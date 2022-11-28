import React from 'react'
import image from './images/image pmp.png'

const Section3 = () => {
  return (
   
    <div className='flex'>
    
    <div>
    <section className='payment'><img src={image} alt="image"/>
    <h2>Easy Mode of Payment</h2>
    <h4>people can now easily send and receive money
        from anywhere <br></br>in the world to purchase goods 
        and pay for services</h4>
    </section>
    </div>
    
    <div>
    <section className='financial'><img src={image} alt="image"/>
    <h2>Financial Freedom</h2>
    <h4>Just like the internet, no single entity <br></br>
    control the Crypto world
    </h4>
    </section>
    </div>
    
    <div>
    <section className='investment'><img src={image} alt="image"/>
    <h1>Investment</h1>
    <h4>people can now easily send and receive money
        from anywhere <br></br>in the world to purchase goods 
        and pay for services</h4>
    </section>
    </div>
    
    
    
    </div>
  )
}

export default Section3
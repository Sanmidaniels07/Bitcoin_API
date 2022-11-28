import React from 'react'

const Navbar = () => {
  return (
    <div>
    {/* <nav>
    <h1>Dannys</h1>
    <ul>
    <li>about</li>
    <li>contact</li>
    <li>services</li>
    <li>blogs</li>
    </ul>
     */}
    {/* </nav> */}
    
    <section>
    <div className='navbar'>
    <div className='trad'><h2>TRadExpress</h2></div>
    <div className='bs'><h3>Buy/Sell</h3></div>
    <div className='learn'><h3>Learn</h3></div>
    <div><button>Log in</button></div>
    <div><button>Get Started</button></div>
    </div>
    
    <div className='sec'>
    <h1 className='sb'>Buy, sell and manage your Crypto on TRadExpress</h1>
    
    <h4 className='bn'>Easily Trade Cryptocurrencies like BTC. USDT, ETH, LTC & XRP
    With NGN</h4>
    
    <button className='btn'>Get Started</button>
    </div>
    </section>
    </div>
  )
}

export default Navbar
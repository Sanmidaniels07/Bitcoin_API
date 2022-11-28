import React, { useEffect, useState } from 'react'


const Section1 = () => {
const [post, setPost] = useState([]);
  
  
const getdata = async () => {
  const res = await fetch("https://api.coinlore.net/api/tickers/?start=100&limit=5")
  const data = await res.json()
  console.log(data);
  setPost(data.data)
};

useEffect(() => {
  getdata()
}, []);


return (      
  <div className='npp'>
  {post.map((p) => {
    return (
      <div >
        <div className='snp' key={p.id}>
          <h1>{p.symbol}</h1>
          <h2>{p.name}</h2>
          <h2>{p.price_usd}</h2>
        </div>
      </div>
    );
  })}
  </div>
)
}



export default Section1
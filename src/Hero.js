import React from 'react'
import {useGlobalContext} from "./Context"
import phoneimg from "./images/phone.svg"

function Hero() {
   const {CloseSubmenu} = useGlobalContext()
   
  return (
   <section className='hero' onMouseOver={CloseSubmenu}>
    <div className='hero-center'>
    <article className='hero-info'>
      <h1>Payments infrastructure for the internet</h1>
      <p>
        Millions of companies of all sizes-from startups to Fortune 500s-use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.
      </p>
      <button className='btn'>Start now</button>
    </article>
    <article className='hero-images'>
      <img src={phoneimg} alt="phone" className='phone-img'/>
    </article>
    </div>

   </section>
  )
}

export default Hero

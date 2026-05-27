import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Categories from '../Components/Categories/Categories'
import Offers from '../Components/Offers/Offers'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Categories/>
        <Popular/>
        <Offers/>
    </div>
  )
}

export default Home
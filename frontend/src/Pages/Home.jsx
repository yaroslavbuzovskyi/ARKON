import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Categories from '../Components/Categories/Categories'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Categories/>
        <Popular/>
    </div>
  )
}

export default Home
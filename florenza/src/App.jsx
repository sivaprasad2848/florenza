import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import ProductCard from './components/ProductCard'
import FilterInput from './components/FilterInput'
import CategoryProducts from './pages/CategoryProducts'
import DisplaySettings from './components/DisplaySettings'
import ContactForm from './components/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   {/* <HeroSection />
   <ProductCard />
   <FilterInput /> */}
   {/* <CategoryProducts />
   <DisplaySettings /> */}
   <ContactForm />
  </>
  )
}

export default App

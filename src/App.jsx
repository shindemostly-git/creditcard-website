import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Legal from './pages/Legal.jsx'
import CreateCard from './pages/CreateCard.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/legal/:slug" element={<Legal />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetails'

import "../server"
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Review from './pages/Host/Review'
import HostLayout from './components/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVenDetail'
import HostVanPricing from './pages/Host/HostVenPricing'
import HostVanPhotos from './pages/Host/HostVenPhotos'
import HostVanInfo from './pages/Host/HostVanInfo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path='vans'>
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>

          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} > 
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)



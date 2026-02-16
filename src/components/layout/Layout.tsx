import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import TopBar from './TopBar'
import FloatingCallButton from '../ui/FloatingCallButton'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  )
}

export default Layout

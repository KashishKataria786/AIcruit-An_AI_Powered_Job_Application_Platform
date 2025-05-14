import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-blue-300 max-w-screen'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

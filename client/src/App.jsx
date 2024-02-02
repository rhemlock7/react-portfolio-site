import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/navBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <main className='py-5 light-bg max-width m-auto'>
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App;

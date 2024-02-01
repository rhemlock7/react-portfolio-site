import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar'

function App() {

  return (
    <>
      <NavBar />
      <main className='m-5 light-bg'>
        <Outlet />
      </main>
    </>
  )
}

export default App;

import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumb from '../components/Breadcrumbs'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>JobRoute.</h1>
          <NavLink to='/' exact>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/help'>Help</NavLink>
          <NavLink to='/careers'>Careers</NavLink>
        </nav>
        <BreadCrumb />
      </header>

      <main>
        {/* this is where the child routes will render */}
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout

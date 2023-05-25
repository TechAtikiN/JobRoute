import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>JobRoute.</h1>
          <NavLink to='/' exact>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/help'>Help</NavLink>
        </nav>
      </header>

      <main>
        {/* this is where the child routes will render */}
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout

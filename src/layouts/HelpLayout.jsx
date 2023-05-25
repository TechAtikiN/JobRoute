import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className='help-layout'>
      <h1>Help Layout</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, asperiores!</p>

      <nav>
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default HelpLayout

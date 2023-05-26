import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div>
      <h1>Careers</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis temporibus recusandae unde officiis quia repudiandae libero minima, earum distinctio. Animi maiores incidunt provident veritatis eos numquam dolorem quas. Animi, laboriosam!</p>

      <Outlet />
    </div>
  )
}

export default CareersLayout

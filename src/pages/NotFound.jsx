import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Go to <Link to='/'>Home Page</Link></p>
    </div>
  )
}

export default NotFound

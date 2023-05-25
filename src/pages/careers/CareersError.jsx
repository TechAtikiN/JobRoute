import { Link, useRouteError } from 'react-router-dom'

const CareersError = () => {
  const error = useRouteError()

  return (
    <div className='careers-error'>
      <h2>Could not find career details</h2>
      <p>{error.message}</p>
      <Link to='/'>Back to Home Page</Link>
    </div>
  )
}

export default CareersError

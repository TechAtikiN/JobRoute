import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
  const [user, setUser] = useState('mario')

  if (!user) {
    return <Navigate to='/' replace='true' />
  }

  return (
    <div>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio itaque necessitatibus aliquid deserunt, saepe veniam officiis magni, dolorum culpa beatae sapiente obcaecati ut veritatis earum assumenda vitae accusamus atque.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About

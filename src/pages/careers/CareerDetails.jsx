import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {
  const career = useLoaderData()

  return (
    <div className='career-details'>
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam deleniti labore repudiandae consequatur explicabo! Veritatis recusandae eos rerum! Dolorem, perferendis.</p>
      </div>
    </div>
  )
}

export default CareerDetails

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch(`http://localhost:4000/careers/${id}`)

  if (!res.ok) {
    throw new Error('Could not found details for career')
  }

  return res.json()
}

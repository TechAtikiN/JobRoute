import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, About, FAQ, Contact, NotFound, Careers, CareerDetail, CareersError } from './pages'
import { RootLayout, HelpLayout, CareersLayout } from './layouts'
import { careersLoader } from './pages/careers/Careers'
import { careerDetailsLoader } from './pages/careers/CareerDetails'
import { contactAction } from './pages/help/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<FAQ />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route path='careers' element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}

        />
        <Route path=':id'
          element={<CareerDetail />}
          loader={careerDetailsLoader}

        />
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

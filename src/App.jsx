import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, About, FAQ, Contact, NotFound, Careers, CareerDetail, CareersError } from './pages'
import { RootLayout, HelpLayout, CareersLayout } from './layouts'
import { careersLoader } from './pages/careers/Careers'
import { careerDetailsLoader } from './pages/careers/CareerDetails'
import { contactAction } from './pages/help/Contact'

// Create the router using createBrowserRouter and createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    // Root layout
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} /> // Home page

      <Route path='/about' element={<About />} /> // About page

      {/* Help layout */}
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<FAQ />} /> // FAQ page
        <Route path='contact' element={<Contact />} action={contactAction} /> // Contact page with action
      </Route>

      {/* Careers layout */}
      <Route path='careers' element={<CareersLayout />} errorElement={<CareersError />}>
        <Route index element={<Careers />} loader={careersLoader} /> // Careers page with loader

        {/* Career detail page */}
        <Route
          path=':id'
          element={<CareerDetail />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} /> // Not found page
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

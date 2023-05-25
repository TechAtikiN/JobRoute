import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, About, FAQ, Contact, NotFound, Careers } from './pages'
import { RootLayout, HelpLayout, CareersLayout } from './layouts'
import { careersLoader } from './pages/careers/Careers'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<FAQ />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='careers' element={<CareersLayout />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
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

export default App;

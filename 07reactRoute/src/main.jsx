import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import './index.css'
import Contact from './components/Contact/Contact'
import User from './components/User/User' 
import Github, { githubInfoLoaderData } from './components/Github/Github'


// Main router configuration method 1 - using DIRECT in object

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       { 
//         path: '/contact',
//         element: <Contact />,
//       }
//     ]
//   }
// ])

// Main router configuration method 2 - using createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route 
        loader={githubInfoLoaderData}
        path='github' 
        element={<Github />} 
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

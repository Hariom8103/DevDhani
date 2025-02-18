import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Menu from './Components/Menu/Menu.jsx'
import Review from './Components/Review/Review.jsx'
import { Contact } from 'lucide-react'
import ContactPage from './Components/ContactPage/ContactPage.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='menu' element={<Menu/>} />
      <Route path='review' element={<Review/>} />
      <Route path='contact' element={<ContactPage/>} />
   </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)

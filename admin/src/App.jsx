
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProtectedRoute from './components/core/Auth/ProtectedRoute'
import Home from './pages/Home'
import ErrorPage from './components/core/ErrorPage'
import LoginPage from './pages/Login'
import { Provider } from 'react-redux'
import { store } from './store/store'
import AddProject from './pages/AddProject'
import ListProjects from './pages/ListProjects'
import {ToastContainer} from 'react-toastify'
import ListReviews from './pages/ListReview'
import 'react-toastify/dist/ReactToastify.css';
import Worksection from './pages/Worksection'
import ChangeBackground from './pages/ChangeBackground'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/addProject",
      element: (
        <ProtectedRoute>
          <AddProject />
        </ProtectedRoute>
      )
    },
    {
      path: "/listProjects",
      element: (
        <ProtectedRoute>
          <ListProjects />
        </ProtectedRoute>
      )
    },
    {
      path:"/listReviews",
      element:(
        <ProtectedRoute>
          <ListReviews />
        </ProtectedRoute>
      )
    },
    {
      path:"/worksection",
      element:(
        <ProtectedRoute>
          <Worksection />
        </ProtectedRoute>
      )
    },
    {
      path:"/bg",
      element:(
        <ProtectedRoute>
          <ChangeBackground />
        </ProtectedRoute>
      )
    }
    
  ])
  return (
    <>
    <Provider store = {store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
    <ToastContainer/>
    </>
  )
}

export default App

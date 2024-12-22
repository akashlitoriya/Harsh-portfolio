import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./pages/AppLayout";
import ProductAnimation from "./pages/ProductAnimation";
import ProductMockup from "./pages/ProductMockup";
import PersonalProject from "./pages/PersonalProject";
import { lazy, Suspense } from "react";
const AddReview = lazy(() => import('./pages/AddReview'));
import { Provider } from "react-redux";
import store from "./store/store";
import Loader from "./components/Loader";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import BrandVisual from "./pages/BrandVisual";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
    {
      path: "/productMockup",
      element: <ProductMockup />,
    },
    {
      path: "/productAnimation",
      element: <ProductAnimation />,
    },
    {
      path: "/personalProject",
      element: <PersonalProject />,
    },
    {
      path: "/brandvisual",
      element: <BrandVisual />
    },
    {
      path: '/review',
      element: (
        <Suspense fallback={<Loader />}>
          <AddReview />
        </Suspense>
      ),
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </Provider>
  );
}

export default App;

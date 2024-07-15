import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./pages/AppLayout";
import ProductAnimation from "./pages/ProductAnimation";
import ProductVisualization from "./pages/ProductVisualization";
import PersonalProject from "./pages/PersonalProject";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
    {
      path: "/productVisualization",
      element: <ProductVisualization />,
    },
    {
      path: "/productAnimation",
      element: <ProductAnimation />,
    },
    {
      path: "/personalProject",
      element: <PersonalProject />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;

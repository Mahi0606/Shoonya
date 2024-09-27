import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import BuyPage from "./components/BuyPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import AppLayout from "./components/AppLayout";
import AllProducts from "./components/AllProducts";
import Success from "./components/Success";



function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/sign-in",
          element: <SignIn />
        },
        {
          path: "/sign-up",
          element: <SignUp />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/buy-page/:id",
          element: <BuyPage />
        },
        {
          path: "/allProducts",
          element: <AllProducts />
        }
      ],
    },
    {
      path: "/success",
      element: <Success />
    }
  ]);

  return (
    <Provider store={appStore}>
        <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
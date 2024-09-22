import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import Cart from "./components/Cart";
import BuyPage from "./components/BuyPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "sign-up",
      element: <SignUp />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/buy-page/:id",
      element: <BuyPage />
    }
  ])

  return (
    <Provider store={appStore}>
      <div className="bg-gradient-to-b from-lime-100">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

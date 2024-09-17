import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';

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
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;

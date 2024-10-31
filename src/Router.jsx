import { createBrowserRouter, RouterProvider } from "react-router-dom"

//routes
import Home from "./routes/Home";

const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
  ])

  return (
    <div className="min-h-[100dvh]">
      <RouterProvider router={router} />
    </div>
  )
}

export default Router;

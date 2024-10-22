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
    <div className="min-h-[100dvh] bg-black w-full flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default Router;

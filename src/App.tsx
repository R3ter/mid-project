import Header from "./Components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Root.scss";
import HomePage from "./Pages/HomePage/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

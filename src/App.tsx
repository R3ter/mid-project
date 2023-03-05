import Header from "./Components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Root.scss";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Teachers from "./Pages/TeachersPage/TeachersPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/tutors",
        element: <Teachers />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
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

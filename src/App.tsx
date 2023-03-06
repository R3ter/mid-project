import Header from "./Components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Root.scss";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Teachers from "./Pages/TeachersPage/TeachersPage";
import BookPage from "./Pages/BookPage/BookPage";
import MessagesPage from "./Pages/MessagesPage/MessagesPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import { QueryClient, QueryClientProvider } from "react-query";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/calendar",
        element: <HomePage />,
      },
      {
        path: "/Messages",
        element: <MessagesPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tutors",
        element: <Teachers />,
      },

      {
        path: "/book/:id",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
]);
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

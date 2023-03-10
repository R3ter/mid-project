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
import CalendarPage from "./Pages/CalendarPage/CalendarPage";
import BeTeacherPage from "./Pages/BeTeacherPage/BeTeacherPage";
import RequestsPage from "./Pages/RequestPage/RequestsPage";
import Error404Page from "./Pages/Error404Page/Error404Page";
import Profile from "./Pages/TeacherProfile/TeacherProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/TeacherProfile/:id",
        element: <Profile />,
      },
      {
        path: "/Requests",
        element: <RequestsPage />,
      },
      {
        path: "/teacherProfile",
        element: <BeTeacherPage />,
      },
      {
        path: "/BeTeacherPage",
        element: <BeTeacherPage />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
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

import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

import HomePage from "./pages/homePage.jsx";
import TeamPage from "./pages/teamPage.jsx";
import ProjectsPage from "./pages/projectsPage.jsx";
import FaqPage from "./pages/faqPage.jsx";
import ContactPage from "./pages/contactPage.jsx";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/team",
      element: <TeamPage />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
    {
      path: "/faq",
      element: <FaqPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ])

  return (<RouterProvider router={router} />)  

}

export default App

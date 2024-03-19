import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

import PageAssembler from "./pages/pageAssembler.jsx";
import HomePage from "./pages/homePage.jsx";
import TeamPage from "./pages/teamPage.jsx";
import ProjectsPage from "./pages/projectsPage.jsx";
import FaqPage from "./pages/faqPage.jsx";
import ContactPage from "./pages/contactPage.jsx";
import TestApp from "./testApp.jsx";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageAssembler desiredPage="home" />,
    },
    {
      path: "/home",
      element: <PageAssembler desiredPage="home" />,
    },
    {
      path: "/team",
      element: <PageAssembler desiredPage="team" />,
    },
    {
      path: "/projects",
      element: <PageAssembler desiredPage="projects" />,
    },
    {
      path: "/faq",
      element: <PageAssembler desiredPage="faq" />,
    },
    {
      path: "/contact",
      element: <PageAssembler desiredPage="contact" />,
    },
    {
      path: "/test",
      element: <TestApp />,
    },    
  ])

  return (<RouterProvider router={router} />)  

}

export default App

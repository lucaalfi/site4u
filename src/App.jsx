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
  
  
  // return(
  //   <>
  //   <NavBar activePage="home"/>
  //   <Banner title="Site4u" subtitle="We assist you with Tech 4 FREE" imgSrc="https://placehold.co/1920x1080"/>
  //   <ProjectDisplay name="Lorem Ipsum"
  //   imageSrc="https://placehold.co/1920x1080"
  //   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nunc nisl, sit amet vestibulum odio molestie non. Quisque eu egestas erat. Aliquam et ligula id nisi fringilla finibus vel nec risus. Suspendisse non ipsum tortor. Vestibulum iaculis eget sem quis convallis."/>

  //   <Header/>
  //   <Food/>
  //   <Card name="Lorem Ipsum" 
  //   imageSrc="https://placehold.co/600x600"   description="Lorem Ipsum"
  //   position="Position" 
  //   linkedIn= "https://placehold.co/600x600"
  //   instagram= "https://placehold.co/600x600"/>

  //   <Footer/>

  //   <HomePage/>
  //   </>
  // );
}

export default App

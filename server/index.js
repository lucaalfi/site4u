const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var cors = require('cors');
app.use(cors());


app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
  });

  // name: PropTypes.string,
  // imageSrc:PropTypes.string,
  // description:PropTypes.string,
  // position: PropTypes.string,
  // linkedIn: PropTypes.string,
  // instagram: PropTypes.string,

  // name={"Lorem Ipsum"+i}
  // imageSrc="https://placehold.co/1920x1080"
  // description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nunc nisl, sit amet vestibulum odio molestie non. Quisque eu egestas erat. Aliquam et ligula id nisi fringilla finibus vel nec risus. Suspendisse non ipsum tortor. Vestibulum iaculis eget sem quis convallis."+i}
  // projectLink="https://placehold.co/1920x1080"

app.get("/projects",(req,res) =>{
  const projects = [];
  
  for (let i = 0; i < 12; i++) {
    const project = {
      name:"Lorem Ipsum"+i,
      imageSrc:"https://placehold.co/1920x1080",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nunc nisl, sit amet vestibulum odio molestie non. Quisque eu egestas erat. Aliquam et ligula id nisi fringilla finibus vel nec risus. Suspendisse non ipsum tortor. Vestibulum iaculis eget sem quis convallis."+i,
      projectLink:"https://placehold.co/1920x1080"
    }
    projects.push(project);
  }

  res.json({projects});
});  



app.get("/project",(req,res) =>{
  res.json({
    name: "Luca Alfieri",
    imageSrc:"https://media.licdn.com/dms/image/D5603AQHgTX_5abQmYQ/profile-displayphoto-shrink_800_800/0/1687047996448?e=1716422400&v=beta&t=ip664DKIujCGvhE7UsNWJSgh_ZNItIV-GSqFnrvcFfM",
    description:"A self-motivated individual, always striving to learn new skills and improve.",
    projectLink: "Software Developer",
  })
});  

app.get("/members",(req,res) =>{
  const members = [];
  
  for (let i = 0; i < 52; i++) {
    const member = {
      name:"Lorem Ipsum"+i,
      imageSrc:"https://placehold.co/600x600" ,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      position: "Software Developer",
      linkedIn: "https://placehold.co/600x600" ,
      instagram: "https://placehold.co/600x600"  
    }
    members.push(member);
  }

  res.json({members});
}); 



app.get("/member",(req,res) =>{
  res.json({
    name: "Luca Alfieri",
    imageSrc:"https://media.licdn.com/dms/image/D5603AQHgTX_5abQmYQ/profile-displayphoto-shrink_800_800/0/1687047996448?e=1716422400&v=beta&t=ip664DKIujCGvhE7UsNWJSgh_ZNItIV-GSqFnrvcFfM",
    description:"A self-motivated individual, always striving to learn new skills and improve.",
    position: "Software Developer",
    linkedIn: "https://www.linkedin.com/in/luca-m-alfieri/",
    instagram: ""
  })
});  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
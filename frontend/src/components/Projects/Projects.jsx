// import { Button, Typography } from "@mui/material";
// import React from "react";
// import "./Projects.css";
// import { AiOutlineProject } from "react-icons/ai";
// import { Delete } from "@mui/icons-material";
// import { FaRegSmileWink } from "react-icons/fa";
// import { deleteProject, getUser } from "../../actions/user";
// import { useDispatch } from "react-redux";

// export const ProjectCard = ({
//   url,
//   projectImage,
//   projectTitle,
//   description,
//   technologies,
//   isAdmin = false,
 
// }) => {
 
//   return (
//     <>
//       <a href={url} className="projectCard" target="black">
//         <div>
//           <img src={projectImage} alt="Project" />
//           <Typography variant="h5">{projectTitle}</Typography>
//         </div>
//         <div>
//           <Typography variant="h4"> About Project</Typography>
//           <Typography>{description}</Typography>
//           <Typography variant="h6">Tech Stack: {technologies}</Typography>
//         </div>
//       </a>

//       {isAdmin && (
//         <Button
//           style={{ color: "rgba(40,40,40,0.7)" }}
//           // onClick={() => deleteHandler(id)}
//         >
//           <Delete />
//         </Button>
//       )}
//     </>
//   );
// };

// const Projects = () => {
//   const projects=[1,2,3];
//   return (
//     <div className="projects">
//       <Typography variant="h3">
//         Projects <AiOutlineProject />
//       </Typography>

//       <div className="projectsWrapper">
//         {projects.map((projects,index) => (
//           <ProjectCard
//            url="https://www.youtube.com/watch?v=h1igcrpG-Ek&list=PPSV"
//             projectImage="https://i.pinimg.com/564x/7d/0a/a3/7d0aa3057ea04c1eb608d16c20f319ac.jpg"
//             projectTitle="sample project"
//             description="sdlkjfa;s f slkjdfslfs kflsjldkfslf "
//             technologies="react.js three.js "
//           />
//         ))}
//       </div>

//       <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
//         All The Projects Shown Above Are Made By Me <FaRegSmileWink />
//       </Typography>
//     </div>
//   );
// };

// export default Projects;

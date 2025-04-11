import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Blackngreen Website",
    year: "Mar 2025",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://revamp.blackngreen.com",
  },
  {
    name: "Nexiva Landing Page",
    year: "Nov 2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://nexiva.ai",
  },
  {
    name: "Education Portal",
    year: "June 2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://dev.educarportal.com/",
  },
  {
    name: "Swipe&Win",
    year: "Mar 2023",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://livedemo-sp.swipe4win.com/",
  },
  {
    name: "Comfy Store",
    year: "Sept 2022",
    align: "left",
    image: "/images/website-img-1.jpg",
    link:"https://react-course-comfy-sloth-store.netlify.app/products/recroK1VD8qVdMP5H",
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

import ProjectCard from "./ProjectCard";
import { projectDetails } from "../utils/projectDetails";
function Projects() {
  projectDetails.map((projectDetail) => {
    console.log(projectDetail.projectNum);
  });
  return (
    <div
      className="sm:mt-0 mt-[100px] min-h-screen flex items-center justify-center flex-col"
      id="Projects"
    >
      <div className="text-center leading-10 md:pt-0 pt-[100px]">
        <p className="text-slate-400 text-xl">
          Browse <span className="text-blue-400">My Recent</span>
        </p>
        <h1 className="text-6xl font-semibold">Projects</h1>
      </div>
      <div className=" mt-[100px] grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
        <ProjectCard projectDetails={projectDetails} />
      </div>
    </div>
  );
}

export default Projects;

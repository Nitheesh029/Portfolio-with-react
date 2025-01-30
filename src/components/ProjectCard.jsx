import Button from "./Button";

function ProjectCard(props) {
  const { projectDetails } = props;
  return (
    <>
      {projectDetails.map((projectDetail, index) => {
        return (
          <div
            className="w-[320px] border-2 rounded-xl h-[400px] flex flex-col justify-around"
            key={index}
          >
            <div>
              <img
                src={projectDetail.imgUrl}
                key={index}
                className="w-[70%] h-[250px] object-cover rounded-xl mx-auto"
              />
            </div>
            <div className="mx-auto text-2xl font-semibold" key={index}>
              Project {projectDetail.projectNum}
            </div>
            <div className="flex mx-auto gap-3">
              <a href={projectDetail.githubUrl} key={index}>
                <Button>Github</Button>
              </a>
              <a href={projectDetail.demoUrl} key={index}>
                <Button>Demo</Button>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectCard;

import Button from "./Button";

function ProjectCard(props) {
  const { projectDetails } = props;
  return (
    <div className="w-[320px] border-2 rounded-xl h-[400px] flex flex-col justify-around">
      <div>
        <img
          src="weather.png"
          alt=""
          className="w-[70%] h-[250px] object-cover rounded-xl mx-auto"
        />
      </div>
      <div className="mx-auto text-2xl font-semibold">Project One</div>
      <div className="flex mx-auto gap-3">
        <a href="">
          <Button>Github</Button>
        </a>
        <a href="">
          <Button>Demo</Button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

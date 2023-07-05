const projectList = [
  {
    h1: "Lorem ipsum.",
    h2: "More lorem ipsum bacon ipsum.",
    p: "Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.",
    img_src:
      "https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80",
  },
  {
    h1: "Lorem ipsum.",
    h2: "More lorem ipsum bacon ipsum.",
    p: "Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.",
    img_src:
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80",
  },
  {
    h1: "Lorem ipsum.",
    h2: "More lorem ipsum bacon ipsum.",
    p: "Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.",
    img_src:
      "https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80",
  },
];

function Projects() {
  let projects = projectList.map((project) => (
    <div className='tile'>
      <img src={project.img_src} alt='' />
      <div className='text'>
        <h1>{project.h1}</h1>
        <h2 className='animate-text'>{project.h2}</h2>
        <p className='animate-text'>{project.p}</p>
        <div className='dots'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  ));
  return <div className='wrap'>{projects}</div>;
}

export default Projects;

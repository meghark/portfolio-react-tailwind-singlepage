const ProjectsList = ({ projects }) => {
    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
        {projects &&
          projects.map(project => 
        

               <a href={project.url} target="_blank" className="group " key={project.title}>
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-12 xl:aspect-h-3">
                  <img src={require(`../../${project.imgsrc}`)}  className="w-full h-full object-center object-cover group-hover:opacity-75"/>
                </div>                        
                <p className="mt-1 text-lg font-medium text-gray-900">{project.title}</p>
               </a>

           
          )}
          </div>
    );
  };
 
  export default ProjectsList;
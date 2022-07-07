import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub} from "@fortawesome/free-brands-svg-icons";

// Component to create repeated project section. Avoids code duplication for similar looking projects.
// Receives project data array as input.
// Each project details is plugged into the html tags.
// Used a card with image to display each project. The cards will have an image of deployed app, links to github and deployed app.

const ProjectsList = ({ projects }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
        
        {projects &&
          projects.map(project => 
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
            style={{
              backgroundImage:`url(${require(`../../${project.imgsrc}`)})`
              }}
            title={project.title}>
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{project.title}</div>
                <a className="text-gray-900 font-semibold" href={project.github  } target="_blank" >
                    <FontAwesomeIcon icon={faGithub} /> </a>
              </div>
              <div className="flex items-center">
               
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">
                    <a className="text-gray-900 font-semibold" href={project.url  } target="_blank" >
                      Deployed App
                    </a></p>
           
                </div>
              </div>
            </div>
          </div>
           
          )}
          </div>
    );
  };
 
  export default ProjectsList;
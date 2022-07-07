import resume from '../assets/files/Megha kulathattil sample.pdf';

// The page will display a card with the list of technical skills.
// There is an option to download the resume as well.

function Resume() {
    return (

        <div class="flex justify-center">
           
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Technical Skills</h5>
                <p class="text-gray-700 text-base mb-4">
                <ul class="list-disc">
                    <li><span className="font-semibold">Frontend: </span>HTML5, CSS, JQuery, Javascript, Bootstrap</li>
                    <li><span className="font-semibold">Backend: </span>MySQL, Express, Node, SQL Server, PostgresSQL</li>
                    <li><span className="font-semibold">Test Automation: </span>Gauge, Taiko, Pactum, Ranorex</li>
                    <li><span className="font-semibold">Performance Testing: </span>Visual Studio load and performance tool</li>
                    <li><span className="font-semibold">API Testing: </span>Postman, Swagger, Insomnia</li>
                    <li><span className="font-semibold">Programing Languages: </span>C#, JavaScript, SQL</li>
                    <li><span className="font-semibold">CI/CD Tool: </span>Codefresh, TFS</li>
                    <li><span className="font-semibold">Application Life cycle management: </span>GIT, TFS</li>
                    <li><span className="font-semibold">Cloud Technologies: </span>Docker, Kubernetes</li>
                </ul>
               
                </p>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> 
                                <a href={resume} target="_blank"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume</a></button>
            </div>
            </div>
        );
  }
  
  export default Resume;

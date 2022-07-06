import ProjectList from '../components/ProjectList';

const projects = [{
    title: "Tech Up Work",
    imgsrc : 'assets/images/Tech Up Work.png',
    url: "https://github.com/ravnishgupta/tech-upwork",
    alt: "Tech Up Work Image"
  },
  {
    title: "Event Finder",
    imgsrc : 'assets/images/eventFinder.JPG',
    url: "https://psyche-l.github.io/event-finder/",
    alt: "Event Finder Image"
  },
  {
    title: "Weather App",
    imgsrc : 'assets/images/weather.JPG',
    url: "https://meghark.github.io/weather-current-5dayforecast/",
    alt: "Weather App Image"
  },
  {
    title: "Online Quiz",
    imgsrc : 'assets/images/onlineQuiz.JPG',
    url: "https://meghark.github.io/quiz-html-css-js-webapi/",
    alt: "Online Quiz Image"
  },
  {
    title: "Workday Scheduler",
    imgsrc : 'assets/images/workDay.JPG',
    url: "https://meghark.github.io/daily-task-manager-jquery-bootstrap/",
    alt: "Workday Scheduler Image"
  }
]



function Portfolio() {
    return (
        <section id="portfolio">
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>
                    <ProjectList projects={projects}  />
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                       
                    </div>
                
                </div>
            </div>
        </section>
        );
  }
  
  export default Portfolio;


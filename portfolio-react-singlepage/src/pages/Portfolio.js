function Portfolio() {


    return (
<section id="portfolio">
                <div class="bg-white">
                    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>

                        <div class="max-w-7xl  mx-auto items-center">
                          <a href="https://github.com/ravnishgupta/tech-upwork" target="_blank" class="group ">
                            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-12 xl:aspect-h-3">
                              <img src="./assets/images/Tech Up Work.png" alt=" Tech Up image" class="w-full h-full object-center object-cover group-hover:opacity-75"/>
                            </div>                        
                            <p class="mt-1 text-lg font-medium text-gray-900">Tech Up Work</p>
                          </a>
                       </div>

                      <div class="grid grid-cols-1 py-10 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <a href="https://psyche-l.github.io/event-finder/" target="_blank" class="group ">
                          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-12 xl:aspect-h-3">
                            <img src="./assets/images/eventFinder.JPG" alt="Event Finder image" class="w-full h-full object-center object-cover group-hover:opacity-75"/>
                          </div>                        
                          <p class="mt-1 text-lg font-medium text-gray-900">Event Finder</p>
                        </a>

                        <a href="https://meghark.github.io/weather-current-5dayforecast/" target="_blank" class="group">
                          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img src="./assets/images/weather.JPG" alt="Weather app image" class="w-full h-full object-center object-cover group-hover:opacity-75   "/>
                          </div>
                          <p class="mt-1 text-lg font-medium text-gray-900">Weather App</p>                                         
                        </a>
                  
                        <a href="https://meghark.github.io/quiz-html-css-js-webapi/" target="_blank" class="group">
                          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img src="./assets/images/onlineQuiz.JPG" alt="Online Quiz image" class="w-full h-full object-center object-cover group-hover:opacity-75"/>
                          </div>                  
                          <p class="mt-1 text-lg font-medium text-gray-900">Online Quiz</p>
                        </a>
                  
                        <a href="https://meghark.github.io/daily-task-manager-jquery-bootstrap/" target="_blank" class="group">
                          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img src="./assets/images/workDay.JPG" alt="Workday Scheduler image" class="w-full h-full object-center object-cover group-hover:opacity-75"/>
                          </div>
                          <p class="mt-1 text-lg font-medium text-gray-900">Workday Scheduler</p>
                        </a>
                  
                      </div>
                    </div>
                  </div>
            </section>
            );
  }
  
  export default Portfolio;
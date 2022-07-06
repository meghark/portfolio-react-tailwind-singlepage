import profilePic from "../assets/images/profilepic.jpg";

function About() {
    return (
      <section>
        <div className="text-center">
          <img
            src={profilePic} 
            className="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
       
        </div>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Megha Raj Kulathattil</h1>
          
          </div>
      

          <div class="flex justify-center">
            
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Software Developer In Test</h5>
                <p class="text-gray-700 text-base mb-4">
                Over 10 years of experience as software engineer in multiple roles as a developer, SDET and team lead.
                Interested in Software automated testing and committed to reducing manual effort in testing and improving
                test coverage. Strengths in adaptability and meeting timelines.
                </p>


               
              </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default About;
import profilePic from "../assets/images/profilepic.jpg";

function About() {
    return (
      <section>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Megha Raj Kulathattil</h1>
            <div className="ml-3 relative">
                <img className="h-10 w-10 rounded-full" src={profilePic} alt="Profile picture"/>
            </div>
            <h2 className="mt-1 text-lg font-medium text-gray-900">Software Developer In Test</h2>
          </div>
          <p>
          Over 10 years of experience as software engineer in multiple roles as a developer, SDET and team lead.
           Interested in Software automated testing and committed to reducing manual effort in testing and improving
            test coverage. Strengths in adaptability and meeting timelines.
          </p>
      </section>
    );
  }
  
  export default About;
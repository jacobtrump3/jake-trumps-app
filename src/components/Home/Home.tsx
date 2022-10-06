import profilePic from '../../images/ProfilePic.jpeg'
import styled from 'styled-components';
import DownloadIcon from '../../icons/DownloadIcon';

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 250px
`;
const ResumeLabel = styled.div`
    min-width: 220px
`;

export const Home = () => {
    const handleDownloadResume = () => {
        fetch('Jacob_Trump_Resume_2022.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Jacob_Trump_Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
            <h2 className='d-flex justify-content-center pt-4 pb-3 border-top border-info mt-0'>Home</h2>
            <div className="container-fluid d-flex flex-column overflow-hidden" style={{height: 'calc(100vh - 148px)'}}>
                <div className="row overflow-hidden ps-4 border-top border-info">
                    <div className="col-3 col-lg-2 border-end border-info vh-100 pt-5">
                        <div className="mb-3">
                            <strong>Introduction</strong>
                        </div>
                        <div className="mb-3">
                            <div className="mb-2">
                                <strong>Resume</strong>
                            </div>
                            <div className="ms-4">Professional Summary</div>
                            <div className="ms-4">Work History</div>
                            <div className="ms-4">Education</div>

                        </div>
                        <div className="mb-3">
                            <strong>General</strong>
                        </div>
                    </div>
                    <div className="col mh-100 overflow-auto ms-5 ps-5 pe-4 d-flex flex-column pt-5">
                        <div className='row d-flex justify-content-center mb-5'>
                            <h3 id="introduction-header" className="mb-5">Introduction</h3>
                            <div className='col-lg-8 col-md-9 col-sm-10'>
                                <div className="d-flex justify-content-center">
                                    <ProfilePic src={profilePic} alt="Profile Pic" className='me-5'/>
                                    <p className="mt-5 text-justify ms-5">
                                        Hi, I'm name is Jake Trump and welcome my web app! I'm a software developer 
                                        and made this app to show some of the work I've done over the years as well 
                                        keep track of notes and other useful information that's come as a result of 
                                        that work. In the <strong> Projects</strong> tab you can find some of the 
                                        small projects and proofs of concepts I have created and in the 
                                        <strong className='ms-2'>Notes</strong> tab is a collection of notes and examples for several 
                                        different technologies that I use as a helpful reference during dev. Feel 
                                        free to look around and check out my <a style={{marginRight: '4px'}} href="https://www.linkedin.com/in/jake-trump-8919bb71/">LinkedIn</a> 
                                        and <a href="https://github.com/jacobtrump3">Github</a> which are also linked above in the header. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center my-5'>
                            <h3 id="resume-header" className="mb-5">
                                Resume 
                                <DownloadIcon 
                                    style={{cursor: 'pointer', marginLeft: '12px'}} 
                                    onClick={handleDownloadResume}
                                />
                            </h3>
                            <div className='col-lg-8 col-md-9 col-sm-10'>
                                <h4 className="mb-5">Professional Summary</h4>
                                <div className="d-flex justify-content-center">
                                    <p className="text-justify"> 
                                        Motivated and ambitious Software Engineer experienced in working effectively in 
                                        dynamic environments. Continuously seeking opportunities to learn and contribute in 
                                        new ways. I am passionate about finding the best solution to any problem and doing 
                                        whatever I can to contribute to the success of the team.
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-8 col-md-9 col-sm-10'>
                                <h4 className="my-5">Work History</h4>
                                <div className="d-flex justify-content-center">
                                    <ResumeLabel>
                                        <div>
                                            July 2021 - September 2022
                                        </div>
                                        <strong>
                                            Sr Frontend Engineer
                                        </strong>
                                        <div>
                                            Postclick
                                        </div>
                                    </ResumeLabel>
                                    <div>
                                        <ul>
                                            <li className='text-justify mb-1'>
                                                Developed robust, complex components using Angular13, html5, SCSS, and Typescript.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Leveraged Ngrx and Rxjs to create a reactive component architecture
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Managed and established pattern for implementing feature flags using split.io.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Wrote and maintained effective e2e and unit tests using Cypress and Jest
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Reviewed code and established contribution best practices in Gitlab.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Used NestJS (javascript) and MongoDB to stand up and maintain backend services.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Helped to prototype and document an authentication and authorization pattern using Keycloak.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Conducted technical interviews, as well as building some coding challenges used across the company for the interview process.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Mentored new hires and less experienced developers, fostering an environment of collaboration in my own team as well as others.
                                            </li>
                                        </ul>                          
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-5">
                                    <ResumeLabel>
                                        <div>
                                            January 2021 - July 2021
                                        </div>
                                        <strong>
                                            Sr Frontend Engineer
                                        </strong>
                                        <div>
                                            Capital One
                                        </div>
                                    </ResumeLabel>
                                    <div>
                                        <ul>
                                            <li className='text-justify mb-1'>
                                                Leveraged Angular using Typescript, SCSS, and Nebular to construct a user-friendly robust internal data mapping application used across several teams in the organization.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Implemented test pattern and best practices while maintaining a high level of unit test coverage using Jasmine and Karma
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Helped to set up and maintain end-to-end tests using Cucumber
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Constructed a custom Splunk dashboard that allowed stakeholders to track ETL processes in real time.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Worked closely with devops team to construct a build/deploy pipeline using Jenkins.
                                            </li>
                                        </ul>                          
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-5">
                                    <ResumeLabel>
                                        <div>
                                            October 2019 - December 2020
                                        </div>
                                        <strong>
                                            Sr Frontend Engineer
                                        </strong>
                                        <div>
                                            CBRE | Forum Analytics
                                        </div>
                                    </ResumeLabel>
                                    <div>
                                        <ul>
                                            <li className='text-justify mb-1'>
                                                Collaborated with project managers to design and develop a robust customizable application in React using inline styling with CSS and Material UI.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Worked in depth with the Google Maps Api to build unique interactive components to display location information and map layers.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Helped to supervise, set up, and sustain best practices and standards for a front end Javascript/React codebase.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Built and consumed endpoints using Python in an Anaconda environment
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Used WebWorkers and Websockets with FastApi to stand up a push notifications architecture.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Set up and maintained testing framework, standards, and coverage with Jest and Enzyme.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Constructed and queried tables in pgAdmin using PostgreSQL.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Stood up and helped maintain endpoints using Spring Boot and the Spring JPA repository
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Used Terraform and AWS with Azure DevOps to deploy to and manage multiple environments for testing, development, and production
                                            </li>
                                        </ul>                          
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-5">
                                    <ResumeLabel>
                                        <div>
                                            June 2018 - October 2019
                                        </div>
                                        <strong>
                                            Software Engineer
                                        </strong>
                                        <div>
                                            Infosys Limited - Chicago IL
                                        </div>
                                    </ResumeLabel>
                                    <div>
                                        <ul>
                                            <li className='text-justify mb-1'>
                                                Built vital components for enterprise level applications using React, Typescript, Bootstrap, and SCSS.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Connected applications to existing services and utilized selective querying using Apollo and Graphql.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Constructed and consumed new services using the serverless framework and AWS (Lambda, Api Gateway, Cognito).
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Helped to coordinate release activities for deployment to AWS in an Agile environment.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Created, maintained, and supervised a lead branch on Git for the development of a major component by a six person team
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Reviewed, provided binding approval, and merged team members code to master branch on Git.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Wrote thorough unit and functionality tests using Jest, Puppeteer, and Chai.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Bundled modules and added loaders for SCSS and Typescript in webpack.
                                            </li>
                                        </ul>                          
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-5">
                                    <ResumeLabel>
                                        <div>
                                            Mar 2018 - June 2018
                                        </div>
                                        <strong>
                                            Software Engineer
                                        </strong>
                                        <div>
                                            Revature - Tampa, FL
                                        </div>
                                    </ResumeLabel>
                                    <div>
                                        <ul>
                                            <li className='text-justify mb-1'>
                                                Built dynamic and intuitive single page applications using CSS, Typescript, and Bootstrap in the Angular framework.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Leveraged Spring framework and ORM with hibernate to build easy to use light weight api's.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Built and developed crud functionality for a PostgreSQL database using JDBC and Spring data.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Implemented continuous delivery and continuous integration using Git in a Jenkins DevOps pipeline.
                                            </li>
                                            <li className='text-justify mb-1'>
                                                Utilized agile methodology and coordinated work efforts in a multi-team project.
                                            </li>
                                        </ul>                          
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-8 col-md-9 col-sm-10'>
                                <h4 className="mb-5">Education</h4>
                                <div>
                                    <div>
                                        December 2017
                                    </div>
                                    <div>
                                        <strong>Bachelor of Science:</strong> Management Information Systems
                                    </div>
                                    <div>
                                        University of Delaware | Newark, DE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
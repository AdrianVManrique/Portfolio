import "./css/styles.css"
import Project from './components/project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFilePdf, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom/client');

class Hello extends React.Component {
    render() {
        return (
            <div id="page-wrapper">
                <section id="banner">
                    <div className="inner">
                        <h1 id="my-name">Adrian Manrique</h1>
                        <p id="my-title">Software Engineer</p>
                    </div>
                    <a href="#aboutme"></a>
                </section>

                <section id="aboutme" className="wrapper0">
                    <div className="inner">
                        <header>
                            <h1 id="aboutHeader">About</h1>
                            <p>New Software Engineering Undergraduate with an emphasis on building back-end solutions that integrate seamlessly with front-end interfaces.
                                Involved with creating full-stack projects using Web, Android, and Desktop development. 
                            </p>
                            <p>I immigrated to California from the Phillipines at the age of 5.
                                Growing up in an unfamiliar culture, I discovered a passion for technology and engineering leading me down the path of Computer Science.
                            </p>
                            <p>I'm a quick learner, a highly-motivated problem solver, and always excited to collaborate.
                                Currently looking to develop a solid professional foundation with Companies focused on innovation and diversity.
                            </p>
                        </header>
                        <ul id="iconList">
                            <li> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> </li>
                            <li> <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon> </li>
                        </ul>
                    </div>
                </section>

                <section id="skills" className="wrapper1">
                    <div className="inner">
                        <h1 id="skillsHeader">Skillset</h1>
                        <ul>
                            <li id="skill1" className="skillsList">
                                <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>
                                <h3>Software Engineering</h3>
                                <p>I am a software engineer proficient with Python, C++, C#, Java. I've used Atlassian tools such as Jira and Trello.
                                    Experienced in working with Javascript, TypeScript, Jquery, React, Node, Express, SQL, NoSQL, AWS, Git, REST, JUnit.
                                </p>
                            </li>

                            <li id="skill2" className="skillsList">
                                <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                                <h3>Leadership</h3>
                                <p>As a Senior Recreational Leader for the City of Carlsbad,
                                    my responsibilities include training and coordinating staff,
                                    maintaining public facilities, and
                                    fostering positive relationships with the community.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                <section id="projects">
                    <Project />
                </section>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);